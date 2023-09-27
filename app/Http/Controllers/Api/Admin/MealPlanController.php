<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MealPlan;
use App\Models\MealPlanOption;
use App\Models\MealPlanOptionValue;
use App\Http\Resources\MealPlanResource;
use App\Http\Resources\MealPlanOrderResource;
use App\Models\MealPlanAddon;
use Illuminate\Support\Facades\Storage;

class MealPlanController extends Controller
{
    public function index()
    {
        $mealPlans = MealPlan::get();
        return MealPlanResource::collection($mealPlans);
    }

    public function mealplanOptions()
    {
        $mealPlanOptions = MealPlanOption::getDataForSelect();
        return response()->json($mealPlanOptions);
    }
    /**
     * Create Meal plan
     */
    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'between:1,64'],
            'description' => ['required', 'between:1,48'],
            'short_description' => ['between:1,48'],
            'price' => ['required','numeric'],
            'discount' => ['numeric'],
            'duration' => ['max:64']
        ]);

        $fileName = null;
        if($request->hasFile('file')) {
            $fileName = $this->fileStoreName($request->file('file'));
            $request->file('file')->storeAs('public/mealplan', $fileName);
            $request->merge(['image' => $fileName]);
        }
        $mealPlan = MealPlan::create($$request->only(['name','description','short_description', 'price', 'discount', 'duration', 'image']));
        return response()->json($mealPlan);
    }

    public function createOption(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'between:1,64'],
            'display_type' => ['required', 'between:1,48'], // in:Business,Company,Personal,Online Shopping,Others
            'optionValues' => ['required']
        ]);

        // display type == radio, input, checkbox
        $mealPlanOption = MealPlanOption::create($request->only(['name', 'display_type', 'status']));
        foreach ($request->get('optionValues') as $key => $data) {
            MealPlanOptionValue::create([
                'meal_plan_option_id' => $mealPlanOption->id,
                'value' => $data['value'],
                'price' => $data['price']
            ]);
        }

        return response()->json($mealPlanOption);
    }

    public function createAddon(Request $request)
    {
        $this->validate($request, [
            'mealplan_id' => ['required'],
            'mealplan_option_id' => ['required', ]
        ]);
        $mealPlanOption = MealPlanAddon::create($request->only(['mealplan_id', 'mealplan_option_id']));
        return response()->json($mealPlanOption);
    }

    public function edit($id)
    {
        $mealPlan = MealPlan::find($id);
        return response()->json($mealPlan);
    }

    public function options($id)
    {
        $mealPlanOptions = MealPlanOption::with('optionValues')->get();
        return response()->json($mealPlanOptions);
    }
    
    /**
     * MealPlan update
     */
    public function update(Request $request)
    {
        $mealPlan = MealPlan::find($request->id);
        $this->validate($request, [
            'name' => ['required', 'between:1,64'],
            'description' => ['required', 'between:1,48'],
            'short_description' => ['between:1,48'],
            'price' => ['required','numeric'],
            'discount' => ['numeric'],
            'duration' => ['max:64']
        ]);

        $fileName = $mealPlan->image;
        if(!empty($request->file('file'))) {
            unlink(storage_path('app/public/mealplan/'.$fileName));
            $fileName = $this->fileStoreName($request->file('file'));
            $request->file('file')->storeAs('public/mealplan', $fileName);
            $request->merge(['image' => $fileName]);
        }
        $mealPlan->update($request->only([
                'name','description','short_description', 
                'price', 'discount', 'duration', 'image'
        ]));
        return response()->json($mealPlan);
    }



    private function fileStoreName($file)
    {
        $fileNameWithExt = $file->getClientOriginalName();
        $fileNameWithExt = str_replace(" ", "_", $fileNameWithExt);

        $filename = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
        $filename = preg_replace("/[^a-zA-Z0-9\s]/", "", $filename);
        $filename = urlencode($filename);

        $extension = $file->getClientOriginalExtension();

        return $filename.'_'.time().'.'.$extension;
    }

    public function mealPlanOrderData()
    {
        $mealPlans = MealPlan::where('status', 1)->get();
        return MealPlanOrderResource::collection($mealPlans);
    }
}
