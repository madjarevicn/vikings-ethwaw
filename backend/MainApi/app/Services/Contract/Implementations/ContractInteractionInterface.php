<?php


namespace App\Services\Contract\Implementations;


interface ContractInteractionInterface
{
    /**
     * Get number of transaction that contract have.
     * @param string $address
     * @return int
     */
    public function transactionCount($address);

    /**
     * Check if contract is verified or not.
     * @param string $address
     * @return boolean
     */
    public function isVerified($address);

    /**
     * Get balance of a address.
     * @param string $address
     * @return double
     */
    public function getBalance($address);

    /**
     *
     * Checks if we have security audits.
     *
     * @param string $address
     * @return boolean
     */
    public function hasSecurityAudits($address);

    /**
     * @param string $address
     * @return string|null
     */
    public function getPublicUrl($address);

    /**
     * Get contract name.
     * @param string $address
     * @return string
     */
    public function getContractName($address);

    /**
     * @param string $address
     * @return string
     */
    public function getContractCreationDate($address);
}
