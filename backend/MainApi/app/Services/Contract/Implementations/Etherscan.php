<?php


namespace App\Services\Contract\Implementations;

use GuzzleHttp\Client;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class Etherscan implements ContractInteractionInterface
{
    /**
     * @var string
     */
    protected $apiKey;

    /**
     * @var array
     */
    protected $cache = [];

    /**
     * Etherscan constructor.
     * @param string $apiKey
     */
    public function __construct(string $apiKey)
    {
        $this->apiKey = $apiKey;
    }

    public function transactionCount($address)
    {
        $json = (new Client())->get('https://etherscan.io/txs?a='.$address)->getBody()->getContents();

        $result = trim(Str::after(Str::before($json, 'transactions found<'), 'total of'));

        $result = str_replace(',', '', $result);

        return intval($result);
    }

    public function isVerified($address)
    {
        $json = (new Client())->get('https://api.etherscan.io/api?module=contract&action=getabi&address='.$address.'&apikey='.$this->apiKey)->getBody()->getContents();

        $result = json_decode($json, true);

        return Arr::get($result, 'status') === '1';
    }

    public function getBalance($address)
    {
        $json = $this->scrapePage($address);

        $data = Str::before(
            Str::before(Str::after(Str::after($json, 'Token:</div>'), '>$'), 'badge badge-primary mx-1'),
            '<span class='
        );
        $value = Str::before(str_replace(',', '', trim(preg_replace('/\s+/', ' ', $data))), '.');

        return intval($value);
    }

    public function getPublicUrl($address)
    {
        $json = $this->scrapePage($address);

        $url = Str::between(Str::after(Str::before($json, 'External Site - More Info'), 'Public Name Tag'), '<a href=\'', '\' target=');

        // Url does not exist.
        if (strlen($url) > 50) {
            return  null;
        }

        return $url;
    }

    public function getContractCreationDate($address)
    {
        $json = (new Client())->get('https://etherscan.io/txs?a='.$address.'&f=5')->getBody()->getContents();

        return Str::after(Str::before(Str::after(Str::after(Str::before($json, 'class=\'showAge \''), 'class=\'showDate \''), 'title=\''),  '</span>'), '\'>');
    }

    public function hasSecurityAudits($address)
    {
        $json = $this->scrapePage($address);

        $search = 'No Contract Security Audit Submitted';

        return str_contains($json, $search) === false;
    }

    private function scrapePage($address) {

        $cacheKey = sha1('scrape_page_'.$address);

        if (isset($this->cache[$cacheKey])) {
            return $this->cache[$cacheKey];
        }

        $json = Cache::remember(sha1('scrape_page'.$address), Carbon::now()->addDay(), function () use ($address) {
            return (new Client())->get('https://etherscan.io/address/'.$address)->getBody()->getContents();
        });

        $this->cache[$cacheKey] = $json;

        return $this->cache[$cacheKey];
    }

    public function getContractName($address)
    {
        $json = $this->scrapePage($address);

        return Str::after(Str::before(Str::after($json, '>Token</span>Tracker:</div>'), '</a>'), 'Page">');
    }
}
