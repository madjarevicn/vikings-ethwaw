<?php

namespace App\Services\Contract;

use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

class ContractService
{
    /**
     * @var ContractManagerInterface
     */
    protected $manager;

    /**
     * ContractService constructor.
     * @param ContractManagerInterface $manager
     */
    public function __construct(ContractManagerInterface $manager)
    {
        $this->manager = $manager;
    }

    public function info($address, $chainId) {

        $key = sha1('info_'.$address.'_'.$chainId);

        return Cache::remember($key, Carbon::now()->addDay(), function () use ($address, $chainId) {
            $implementation = $this->manager->getImplementation($chainId);

            return [
                'name' => $implementation->getContractName($address),
                'is_verified' => $implementation->isVerified($address),
                'transaction_count' => $implementation->transactionCount($address),
                'balance_usd' => $implementation->getBalance($address),
                'public_url' => $implementation->getPublicUrl($address),
                'created_at' => $implementation->getContractCreationDate($address),
                'contract_audited' => $implementation->hasSecurityAudits($address)
            ];
        });
    }
}
