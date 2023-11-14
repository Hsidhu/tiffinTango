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

        $guard = $this->getDbTable($userType);

        return [
            'email' => ['required', 'email', 'exists:'.$guard.',email'],
            'password' => ['required', 'min:6'],
        ];
    }

    private function getDbTable($value)
    {
        switch ($value) {
            case 'customer':
                return 'customers';
                break;
            case 'driver':
                return 'drivers';
                break;
            default:
                return 'users';
                break;
        }
    }


}
