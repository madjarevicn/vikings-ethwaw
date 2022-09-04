<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/contract/{address}', [\App\Http\Controllers\ContractController::class, 'show'])
    ->name('contract.show');

Route::post('/contract/call', [\App\Http\Controllers\ContractController::class, 'call'])
    ->name('contract.call');

Route::get('/address/{address}/approvals', [\App\Http\Controllers\AddressController::class, 'approvals'])
    ->name('address.approvals');

Route::get('/selectors', [\App\Http\Controllers\FunctionSelectorsController::class, 'index'])
    ->name('selectors.index');
