<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Admin\DriverZoneResource;
use App\Http\Resources\Admin\DocumentResource;

class DriverResource extends JsonResource
{
    public static $wrap = null;

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'full_name' => $this->full_name,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'phone' => $this->phone,
            'address_id' => $this->address->id,
            'full_address' => $this->address->formatted_Address,
            'address' => $this->address,
            'city' => $this->address->city,
            'postal_code' => $this->address->postal_code,
            'license' => $this->license,
            'status' => $this->status,
            'driverZones' => DriverZoneResource::collection($this->driverZones),
            'created_at' => $this->created_at->setTimezone(config('app.CLIENT_TIMEZONE'))->format('Y-m-d H:i:s'),
            'avatar' => $this->getAvatarInfo(),
            'documents' => DocumentResource::collection($this->getMedia('documents')),
        ];
    }

    protected function getAvatarInfo()
    {
        $avatar = $this->getFirstMedia('driverAvatars');

        return $avatar ? 
            [
                'uid' => $avatar->id,
                'name' => $avatar->name,
                'status' => 'done',
                'url' => $avatar->getUrl()
            ]
            : null;
    }
}
