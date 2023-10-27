<?php

if (!function_exists('setting')) {
    /**
     * @param null $key
     * @param null $default
     *
     * @return mixed
     */
    function setting($key = null, $default = null)
    {
        $settingConfig = app()->make(\App\Models\Setting::class);

        if (is_null($key))
            return $settingConfig;

        return $settingConfig->getSettingItem($key, $default);
    }
}

if (!function_exists('studly_case')) {
    /**
     * Convert a value to studly caps case.
     *
     * @param string $value
     * @return string
     */
    function studly_case($value)
    {
        return Str::studly($value);
    }
}

if (!function_exists('array_get')) {
    /**
     * Get an item from an array using "dot" notation.
     *
     * @param \ArrayAccess|array $array
     * @param string|int $key
     * @param mixed $default
     * @return mixed
     */
    function array_get($array, $key, $default = null)
    {
        return Arr::get($array, $key, $default);
    }
}


if (!function_exists('str_slug')) {
    /**
     * Generate a URL friendly "slug" from a given string.
     *
     * @param string $title
     * @param string $separator
     * @param string $language
     * @return string
     */
    function str_slug($title, $separator = '-', $language = 'en')
    {
        return Str::slug($title, $separator, $language);
    }
}


if (!function_exists('array_except')) {
    /**
     * Get all of the given array except for a specified array of keys.
     *
     * @param array $array
     * @param array|string $keys
     * @return array
     */
    function array_except($array, $keys)
    {
        return Arr::except($array, $keys);
    }
}