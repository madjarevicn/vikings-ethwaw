<?php

namespace App\Console\Commands;

use App\Models\FunctionSelector;
use App\Services\Contract\ContractService;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class Test extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    function getBetween($content, $start, $end) {
        $n = explode($start, $content);
        $result = Array();
        foreach ($n as $val) {
            $pos = strpos($val, $end);
            if ($pos !== false) {
                $result[] = substr($val, 0, $pos);
            }
        }
        return $result;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(ContractService $service)
    {
        $address = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984';

        // https://etherscan.io/txs?a=0x1f9840a85d5af5bf1d1762f925bdaddc4201f984&f=5
        $json = (new Client())->get('https://etherscan.io/txs?a='.$address.'&f=5')->getBody()->getContents();

//        $json = file_get_contents('created.html');


//        $createdAt = Str::after(Str::before(Str::after(Str::after(Str::before($json, 'class=\'showAge \''), 'class=\'showDate \''), 'title=\''),  '</span>'), '\'>');



        dd($createdAt);


        dd($json);


        $str = file_get_contents('approve.html');

        $str = Str::after($str, '<div class="card-body">');

        $before = 'hash-tag text-truncate';
        $after = 'Revoke';

        $matches = $this->getBetween($str, $before, $after);

        $data = [];

        foreach ($matches as $match) {

            $txHash = Str::before(Str::after($match, 'href=\'/tx/'), '\'>');
            $lastUpdated = Str::before(Str::after(Str::after($match, '<span class=\'showAge\''), 'title=\''), '\'>');
            $assetName = Str::before(Str::after($match, 'alt=\''), '\'>');
            $approvedSpender = Str::before(Str::after(Str::after($match, 'contract'), '/address/'), '\'>');
            $assetIcon = 'https://etherscan.io'.Str::before(Str::after($match, 'u-xs-avatar mr-2\' src=\''), '\' ');

            $data[] = [
                'tx_hash' => $txHash,
                'last_updated' => $lastUpdated,
                'asset_name' => $assetName,
                'approved_spender' => $approvedSpender,
                'asset_icon' => $assetIcon
            ];
        }

        dd($data);

//        $chainId = 1;
//        $address = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984';
//        $inputData = '0x8803dbee00000000000000000000000000000000000000000000000000000001004ccb00000000000000000000000000000000000000000000000000000000012a05f20000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000005b38da6a701c568545dcfcb03fcb875f56beddc4000000000000000000000000000000000000000000000000000000006313493300000000000000000000000000000000000000000000000000000000000000020000000000000000000000009430801ebaf509ad49202aabc5f5bc6fd8a3daf8000000000000000000000000118a612880b8e3f9914b0d4bff702e3fbec91783';
//
//        $tokenInfo = $service->info($address, $chainId);
//        $data = $this->sendRequest($inputData);
//
//
//        $key = substr($inputData, 0, 10);
//
//        $selector = FunctionSelector::where('selector', $key)->first();
//        $inputParams = [];
//        $inputValues = [];
//
//        foreach ($data as $key => $value) {
//            $value = Arr::first($value);
//
//            $result = Arr::get($value, 'hex');
//
//            if ($result === null) {
//                $result = $value;
//            } else {
//                $result = hexdec($result);
//            }
//
//            $inputParams[] = $key;
//            $inputValues[] = $result;
//        }
//
//        $result = [
//            'tx_overview' => [
//                'protocol_name' => Arr::get($tokenInfo, 'name'),
//                'action' => $selector->function_name,
//                'action_description' => $selector->description,
//                'topic' => $selector->topic,
//                'input_params' => $inputParams,
//                'input_values' => $inputValues
//            ],
//            'contract_details' => $tokenInfo,
//            'trust_score' => [
//                'value' => random_int(1, 100),
//                'description' => 'This contract is not considered very safe.'
//            ]
//        ];
//
//
//        dd($result);
//
//
//
//
//        $str = '<option value="123">abc</option>
//        <option value="123">aabbcc</option>';
//
/*        preg_match_all("#<option.*?>([^<]+)</option>#", $str, $foo);*/
//
//        print_r($foo[1]);
//
//        dd($foo);
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
                'value' => random_int(1, 100),
                'description' => 'This contract is not considered very safe.'
            ]
        ];

        return $result;
    }

    private function sendRequest($inputData) {

        $json = (new Client())->post('https://vikings-hackathon-web3.herokuapp.com/test', [
            'json' => [
                'raw_input' => $inputData,
                'selectors' => FunctionSelector::format(),
            ]
        ])->getBody()->getContents();

        return Arr::get(json_decode($json, true), 'result');
    }
}
