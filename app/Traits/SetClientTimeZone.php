<?php

namespace App\Traits;

use Carbon\Carbon;
use Carbon\CarbonTimeZone;

trait SetClientTimeZone
{
    public $userTimezone = 'UTC';

    public function setUserTimezone()
    {
        $this->userTimezone = config('app.CLIENT_TIMEZONE');
    }

    public function getFormat()
    {
        return 'Y-m-d H:i:s';
    }



    /**
     * Return a timestamp as DateTime object.
     *
     * @param  mixed  $value
     * @return \Illuminate\Support\Carbon
     */
    protected function asDateTime($value)
    {
        $this->setUserTimezone();

        if ($value instanceof Carbon) {
            return $value->timezone($this->userTimezone);
        }
        var_dump($value);
        
        //return $this->getLocalizedTimestamp($value);
    }

    public function getLocalizedTimestamp($value)
    {
        if ($this->userTimezone) {
            try {
                return (new Carbon($value))->setTimezone(new CarbonTimeZone($this->userTimezone))->format($this->getFormat());
            } catch (\Exception $e) {
                dd('asd');
                return 'Invalid DateTime Exception: ' . $e->getMessage();
            }
        }
        return $value; // If no user timezone is set, return the original value.
    }

    public function dateValidation($value)
    {
        if ($value instanceof Carbon) {
            return $value->timezone($this->userTimezone);
        }

        if ($value instanceof \DateTimeInterface) {
            return new Carbon(
                $value->format('Y-m-d H:i:s.u'), $this->userTimezone
            );
        }

        if (is_numeric($value)) {
            return Carbon::createFromTimestamp($value)->timezone($this->userTimezone);
        }

        if ($this->isStandardDateFormat($value)) {
            return Carbon::createFromFormat('Y-m-d', $value)->startOfDay()->timezone($this->userTimezone);
        }
    }
    

}
