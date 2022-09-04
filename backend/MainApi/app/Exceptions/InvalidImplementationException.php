<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Contracts\Support\Responsable;

class InvalidImplementationException extends Exception implements Responsable
{
    public function toResponse($request)
    {
        return response()->json([
            'status' => 'fail',
            'error' => [
                'code' => 400,
                'message' => 'Chain id that is provided is not currently supported.',
                'type' => 'chain_id_not_supported'
            ]
        ]);
    }
}
