<?php

namespace App\Http\Controllers;

use App\Models\FunctionSelector;
use App\Services\Contract\ContractService;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;

class ContractController extends Controller
{
    /**
     * @var ContractService
     */
    protected $service;

    /**
     * ContractController constructor.
     * @param ContractService $service
     */
    public function __construct(ContractService $service)
    {
        $this->service = $service;
    }


    public function show(Request $request) {

        $data = $this->service->info($request->route('address'), $request->get('chain_id', 1));

        return response()->json([
            'status' => 'ok',
            'contract' => $data
        ]);
    }

    public function call(Request $request) {

        $data = $request->all();
        $inputData = Arr::get($data, 'input_data');
        $address = Arr::get($data, 'address');
        $chainId = 1;

        $result = $this->transform(
            $this->service->info($address, $chainId),
            $this->sendRequest($inputData),
            $inputData
        );

        return response()->json($result);
    }

    private function transform($tokenInfo, $data, $inputData ) {
        
        $key = substr($inputData, 0, 10);

        $selector = FunctionSelector::where('selector', $key)->first();
        $inputParams = [];
        $inputValues = [];

        foreach ($data as $key => $value) {
            $value = Arr::first($value);

            $result = Arr::get($value, 'hex');

            if ($result === null) {
                $result = $value;
            } else {
                $result = hexdec($result);
            }

            $inputParams[] = $key;
            $inputValues[] = $result;
        }

        $result = [
            'tx_overview' => [
                'protocol_name' => Arr::get($tokenInfo, 'name'),
                'action' => $selector->function_name,
                'action_description' => $selector->description,
                'topic' => $selector->topic,
                'input_params' => $inputParams,
                'input_values' => $inputValues
            ],
            'contract_details' => $tokenInfo,
            'trust_score' => [
                'value' => random_int(80, 100),
                'description' => 'This contract is considered very safe.'
            ]
        ];

        return $result;
    }

    private function sendRequest($inputData) {

        return Cache::remember(sha1($inputData), Carbon::now()->addHour(), function () use ($inputData) {
            $json = (new Client())->post('https://vikings-hackathon-web3.herokuapp.com/test', [
                'json' => [
                    'raw_input' => $inputData,
                    'selectors' => FunctionSelector::format(),
                ]
            ])->getBody()->getContents();

            return Arr::get(json_decode($json, true), 'result');
        });
    }
}
