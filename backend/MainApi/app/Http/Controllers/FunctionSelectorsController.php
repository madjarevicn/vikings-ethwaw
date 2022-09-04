<?php

namespace App\Http\Controllers;

use App\Models\FunctionSelector;

class FunctionSelectorsController extends Controller
{
    public function index() {
        return response()->json(FunctionSelector::format());
    }
}
