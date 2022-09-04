<?php

namespace App\Services\Contract;

use App\Exceptions\InvalidImplementationException;
use App\Services\Contract\Implementations\CachingDecorator;
use App\Services\Contract\Implementations\Etherscan;
use Illuminate\Support\Arr;

class ContractManager implements ContractManagerInterface
{
    public function getImplementation($chainId)
    {
        $result = Arr::get($this->getImplementations(), $chainId);

        if ($result === null) {
            throw new InvalidImplementationException();
        }

        return new CachingDecorator($chainId, $result);
    }

    private function getImplementations() {
        return [
            1 => new Etherscan(config('services.contracts.etherscan.api_key'))
        ];
    }
}
