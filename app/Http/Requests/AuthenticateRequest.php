<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthenticateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $userType = $this->request->get('user_type', 'user');

        $guard = ($userType === 'customer') ? 'customers' : 'users';

        return [
            'email' => ['required', 'email', 'exists:'.$guard.',email'],
            'password' => ['required', 'min:6'],
        ];
    }
}
