<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Driver extends Authenticatable implements HasMedia
{
    use HasFactory, HasApiTokens, Notifiable, InteractsWithMedia;

    const ACTIVE = 1;
    const INACTIVE = 0;

    protected $guarded = [];

    public $appends = ['full_name'];
    protected $hidden = ['password'];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('driverAvatars')->singleFile();
        $this->addMediaCollection('documents')
            //->useDisk('media') // Specify the disk to use for storing documents
            ->acceptsFile(function ($file) {
                return in_array($file->mimeType, ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']);
            });
    }

    public function address()
    {
        return $this->belongsTo(\App\Models\Address::class);
    }

    public function driverZones()
    {
        return $this->hasMany(\App\Models\DriverZone::class);
    }

    public function getFullNameAttribute($value)
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    public static function getDataForSelect()
    {
        return static::all()->map(function ($item) {
            return [
                'value' => $item->id,
                'label' => $item->full_name,
            ];
        });
    }
}
