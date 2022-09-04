<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FunctionSelector extends Model
{
    use HasFactory;

    protected $guarded = [];

    public static function format() {
        $items = FunctionSelector::all();

        $data = [];

        foreach ($items as $item) {

            $data[$item->selector] = [
                'name' => $item->function_name,
                'topic' => $item->topic,
                'types' => json_decode($item->types, true),
                'typeNames' => json_decode($item->type_names, true)
            ];
        }

        return $data;
    }
}
