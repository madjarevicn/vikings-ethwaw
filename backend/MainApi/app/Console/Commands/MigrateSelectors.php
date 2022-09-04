<?php

namespace App\Console\Commands;

use App\Models\FunctionSelector;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;

class MigrateSelectors extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'migrate:selectors';

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

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $json = '{"0xf6d8d42a":{"name":"transfer","topic":"ERC20","types":["address","uint256"],"typeNames":["to","amount"]},"0x8f91596c":{"name":"allowance","topic":"ERC20","types":["address","address"],"typeNames":["owner","spender"]},"0xa5f3f11e":{"name":"approve","topic":"ERC20","types":["address","uint256"],"typeNames":["spender","amount"]},"0xfd01f99b":{"name":"transferFrom","topic":"ERC20","types":["address","address","uint256"],"typeNames":["from","to","amount"]},"0x0afe67b2":{"name":"addLiquidity","topic":"AMM","types":["address","address","uint256","uint256","uint256","uint256","address","uint256"],"typeNames":["tokenA","tokenB","amountADesired","amountBDesired","amountAMin","amountBMin","to","deadline"]},"0xaa4272d2":{"name":"addLiquidityETH","topic":"AMM","types":["address","uint256","uint256","uint256","address","uint256"],"typeNames":["token","amountTokenDesired","amountTokenMin","amountETHMin","to","deadline"]},"0x30ab65d5":{"name":"removeLiquidity","topic":"AMM","types":["address","address","uint256","uint256","uint256","address","uint256"],"typeNames":["tokenA","tokenB","liquidity","amountAMin","amountBMin","to","deadline"]},"0x340f6bbd":{"name":"removeLiquidityETH","topic":"AMM","types":["address","uint256","uint256","uint256","address","uint256"],"typeNames":["token","liquidity","amountTokenMin","amountETHMin","to","deadline"]},"0x4336d5e8":{"name":"swapExactTokensForTokens","topic":"AMM","types":["uint256","uint256","address[]","address","uint256"],"typeNames":["amountIn","amountOutMin","path","to","deadline"]},"0x12e967ae":{"name":"swapTokensForExactTokens","topic":"AMM","types":["uint256","uint256","address[]","address","uint256"],"typeNames":["amountOut","amountInMax","path","to","deadline"]},"0xa91c044d":{"name":"swapExactETHForTokens","topic":"AMM","types":["uint256","address[]","address","uint256"],"typeNames":["amountOutMin","path","to","deadline"]},"0x75bb087f":{"name":"swapTokensForExactETH","topic":"AMM","types":["uint256","uint256","address[]","address","uint256"],"typeNames":["amountOut","amountInMax","path","to","deadline"]},"0xb86f1cbd":{"name":"swapExactTokensForETH","topic":"AMM","types":["uint256","uint256","address[]","address","uint256"],"typeNames":["amountIn","amountOutMin","path","to","deadline"]},"0x6fdef044":{"name":"swapETHForExactTokens","topic":"AMM","types":["uint256","address[]","address","uint256"],"typeNames":["amountOut","path","to","deadline"]},"0x7b7ac79f":{"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","topic":"AMM","types":["uint256","uint256","address[]","address","uint256"],"typeNames":["amountIn","amountOutMin","path","to","deadline"]},"0xa9059cbb":{"name":"transfer","topic":"ERC20","types":["address","uint256"],"typeNames":["to","amount"]},"0xdd62ed3e":{"name":"allowance","topic":"ERC20","types":["address","address"],"typeNames":["owner","spender"]},"0x095ea7b3":{"name":"approve","topic":"ERC20","types":["address","uint256"],"typeNames":["spender","amount"]},"0x23b872dd":{"name":"transferFrom","topic":"ERC20","types":["address","address","uint256"],"typeNames":["from","to","amount"]},"0xe8e33700":{"name":"addLiquidity","topic":"AMM","types":["address","address","uint256","uint256","uint256","uint256","address","uint256"],"typeNames":["tokenA","tokenB","amountADesired","amountBDesired","amountAMin","amountBMin","to","deadline"]},"0xf305d719":{"name":"addLiquidityETH","topic":"AMM","types":["address","uint256","uint256","uint256","address","uint256"],"typeNames":["token","amountTokenDesired","amountTokenMin","amountETHMin","to","deadline"]},"0xbaa2abde":{"name":"removeLiquidity","topic":"AMM","types":["address","address","uint256","uint256","uint256","address","uint256"],"typeNames":["tokenA","tokenB","liquidity","amountAMin","amountBMin","to","deadline"]},"0x02751cec":{"name":"removeLiquidityETH","topic":"AMM","types":["address","uint256","uint256","uint256","address","uint256"],"typeNames":["token","liquidity","amountTokenMin","amountETHMin","to","deadline"]},"0x38ed1739":{"name":"swapExactTokensForTokens","topic":"AMM","types":["uint256","uint256","address[]","address","uint256"],"typeNames":["amountIn","amountOutMin","path","to","deadline"]},"0x8803dbee":{"name":"swapTokensForExactTokens","topic":"AMM","types":["uint256","uint256","address[]","address","uint256"],"typeNames":["amountOut","amountInMax","path","to","deadline"]},"0x7ff36ab5":{"name":"swapExactETHForTokens","topic":"AMM","types":["uint256","address[]","address","uint256"],"typeNames":["amountOutMin","path","to","deadline"]},"0x4a25d94a":{"name":"swapTokensForExactETH","topic":"AMM","types":["uint256","uint256","address[]","address","uint256"],"typeNames":["amountOut","amountInMax","path","to","deadline"]},"0x18cbafe5":{"name":"swapExactTokensForETH","topic":"AMM","types":["uint256","uint256","address[]","address","uint256"],"typeNames":["amountIn","amountOutMin","path","to","deadline"]},"0xfb3bdb41":{"name":"swapETHForExactTokens","topic":"AMM","types":["uint256","address[]","address","uint256"],"typeNames":["amountOut","path","to","deadline"]},"0x5c11d795":{"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","topic":"AMM","types":["uint256","uint256","address[]","address","uint256"],"typeNames":["amountIn","amountOutMin","path","to","deadline"]}}';

        $parsed = json_decode($json, true);

        foreach ($parsed as $key => $value) {

            if (FunctionSelector::where('selector', $key)->first() === null) {
                FunctionSelector::create([
                    'selector' => $key,
                    'function_name' => Arr::get($value, 'name'),
                    'topic' => Arr::get($value, 'topic'),
                    'types' => json_encode(Arr::get($value, 'types')),
                    'type_names' => json_encode(Arr::get($value, 'typeNames'))
                ]);
            }
        }


        $json = '{
  "addLiquidity": "Adds liquidity to an ERC-20⇄ERC-20 pool.",
  "addLiquidityETH": "Adds liquidity to an ERC-20⇄WETH pool with ETH.",
  "removeLiquidity": "Removes liquidity from an ERC-20⇄ERC-20 pool.",
  "removeLiquidityETH": "Removes liquidity from an ERC-20⇄WETH pool and receive ETH.",
  "swapExactTokensForTokens": "Swaps an exact amount of input tokens for as many output tokens as possible, along the route determined by the path. The first element of path is the input token, the last is the output token, and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).",
  "swapTokensForExactTokens": "Receive an exact amount of output tokens for as few input tokens as possible, along the route determined by the path. The first element of path is the input token, the last is the output token, and any intermediate elements represent intermediate tokens to trade through (if, for example, a direct pair does not exist).",
  "swapExactETHForTokens": "Swaps an exact amount of ETH for as many output tokens as possible, along the route determined by the path. The first element of path must be WETH, the last is the output token, and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).",
  "swapTokensForExactETH": "Receive an exact amount of ETH for as few input tokens as possible, along the route determined by the path. The first element of path is the input token, the last must be WETH, and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).",
  "swapExactTokensForETH": "Swaps an exact amount of tokens for as much ETH as possible, along the route determined by the path. The first element of path is the input token, the last must be WETH, and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).",
  "swapETHForExactTokens": "Receive an exact amount of tokens for as little ETH as possible, along the route determined by the path. The first element of path must be WETH, the last is the output token and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).",
  "swapExactTokensForTokensSupportingFeeOnTransferTokens": "Identical to swapExactTokensForTokens, but succeeds for tokens that take a fee on transfer."
}';

        $parsed = json_decode($json, true);

        foreach ($parsed as $name => $description) {

            $selector = FunctionSelector::where('function_name', $name)->first();
            $selector->description = $description;
            $selector->save();
        }


        return 0;
    }
}
