<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Driver;
use App\Notifications\BulkMessageNotification;

class MarketingController extends Controller
{
    public function index()
    {
        $customers = Customer::get();
        return response()->json($customers);
    }

    public function bulkEmail(Request $request)
    {
        $this->validate($request, [
            'user_type' => ['required'],
            'subject' => ['required'],
            'body' => ['required'],
        ]);

        $userType = $request->get('user_type');
        $subject = $request->get('subject');
        $body = $request->get('body');
        $from = setting('core.contact_email');

        $users = $this->getUsersByType($userType);
        if(empty($users)){
            return response()->json(['error' => true, 'message' => 'no user found to send email!']);
        }
        
        foreach ($users as $user) {
            $user->notify(new BulkMessageNotification($from, $subject, $body));
        }
        return response()->json(['success' => true, 'number_of_user' => $users->count()]);
        
    }

    private function getUsersByType($userType)
    {
        switch ($userType) {
            case 'customers':
                return Customer::where('status', Customer::ACTIVE)->get();
                break;
            case 'drivers':
                return Driver::where('status', Driver::ACTIVE)->get();
                break;
        }
        return [];
    }

}
