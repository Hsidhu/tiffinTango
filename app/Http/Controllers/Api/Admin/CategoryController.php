<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    public function store(Request $request)
    {
        
        $category = Category::all();
        return response()->json($category);
    }

    public function update(Request $request)
    {
        $postData = $this->validate($request, [
            'first_name' => ['required', 'min:3'],
            'last_name' => ['required', 'min:3'],
        ]);

        $customer = Category::find($request->id);
        $customer = tap($customer)->update($postData);

        return $customer;
    }
}
