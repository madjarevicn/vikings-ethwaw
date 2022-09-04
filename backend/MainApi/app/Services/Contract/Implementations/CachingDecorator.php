<?php

namespace App\Services\Contract\Implementations;

use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

class CachingDecorator implements ContractInteractionInterface
{
    /**
     * @var int
     */
    protected $chainId;

    /**
     * @var ContractInteractionInterface
     */
    protected $implementation;

    /**
     * CachingDecorator constructor.
     * @param int $chainId
     * @param ContractInteractionInterface $implementation
     */
    public function __construct(int $chainId, ContractInteractionInterface $implementation)
    {
        $this->chainId = $chainId;
        $this->implementation = $implementation;
    }

    public function transactionCount($address)
    {
        return Cache::remember(
            $this->generateCacheKey($address, 'transactionCount'),
            Carbon::now()->addHours(3),
            function () use ($address) {
                return $this->implementation->transactionCount($address);
            }
        );
    }

    public function isVerified($address)
    {
        return Cache::remember(
            $this->generateCacheKey($address, 'isVerified'),
            Carbon::now()->addHours(3),
            function () use ($address) {
                return $this->implementation->isVerified($address);
            }
        );
    }

    public function getBalance($address)
    {
        return Cache::remember(
            $this->generateCacheKey($address, 'getBalance'),
            Carbon::now()->addHours(3),
            function () use ($address) {
                return $this->implementation->getBalance($address);
            }
        );
    }

    public function getContractName($address)
    {
        return Cache::remember(
            $this->generateCacheKey($address, 'getContractName'),
            Carbon::now()->addHours(3),
            function () use ($address) {
                return $this->implementation->getContractName($address);
            }
        );
    }

    public function hasSecurityAudits($address)
    {
        return Cache::remember(
            $this->generateCacheKey($address, 'hasSecurityAudits'),
            Carbon::now()->addHours(3),
            function () use ($address) {
                return $this->implementation->hasSecurityAudits($address);
            }
        );
    }


    public function getContractCreationDate($address)
    {
        return Cache::remember(
            $this->generateCacheKey($address, 'getContractCreationDate'),
            Carbon::now()->addHours(3),
            function () use ($address) {
                return $this->implementation->getContractCreationDate($address);
            }
        );
    }


    public function getPublicUrl($address)
    {
        return Cache::remember(
            $this->generateCacheKey($address, 'getPublicUrl'),
            Carbon::now()->addMinutes(30),
            function () use ($address) {
                return $this->implementation->getPublicUrl($address);
            }
        );
    }


    /**
     * @param string $address of the contract.
     * @param string $name of the function
     * @return string
     */
    private function generateCacheKey($address, $name) {
        return sha1($this->chainId."_".$address."_".$name);
    }
}
