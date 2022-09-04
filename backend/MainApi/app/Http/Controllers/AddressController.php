<?php

namespace App\Http\Controllers;

use App\Services\Contract\ContractService;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class AddressController extends Controller
{
    /**
     * @var ContractService
     */
    protected $contractService;

    /**
     * AddressController constructor.
     * @param ContractService $contractService
     */
    public function __construct(ContractService $contractService)
    {
        $this->contractService = $contractService;
    }

    public function approvals(Request $request) {

        return response()->json([
            'status' => 'ok',
            'approvals' => $this->getApprovals($request->route('address'))
        ]);
    }


    private function getApprovals($address) {

        $str = Cache::remember('approvals'.$address, 100000, function () use ($address) {
            return (new Client())->get('https://etherscan.io/tokenapprovalchecker?search='.$address)->getBody()->getContents();
        });

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

        return $data;
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
}
