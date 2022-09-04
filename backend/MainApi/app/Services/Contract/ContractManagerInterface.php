<?php

namespace App\Services\Contract;

use App\Exceptions\InvalidImplementationException;
use App\Services\Contract\Implementations\ContractInteractionInterface;

interface ContractManagerInterface
{
    /**
     * @param int $chainId
     * @return ContractInteractionInterface
     *
     * @throws InvalidImplementationException
     */
    public function getImplementation($chainId);
}
