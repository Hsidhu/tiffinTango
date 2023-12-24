<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class DocumentResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'uid' => $this->id,
            'name' => $this->name,
            'status' => 'done',
            'url' => $this->getUrl(),
        ];
    }
}

