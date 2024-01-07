<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MealPlan;
use App\Models\MealPlanOption;
use App\Models\MealPlanOptionValue;
use App\Http\Resources\Admin\MealPlanResource;
use App\Http\Resources\MealPlanOrderResource;
use App\Models\MealPlanAddon;
use Illuminate\Support\Facades\Storage;
use App\Models\MediaFile;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MealPlanController extends Controller
{
    public function index()
    {
        $mealPlans = MealPlan::get();
        return MealPlanResource::collection($mealPlans);
    }

    public function mealplanOptions($mealplan_id)
    {
        $mealPlanOptions = MealPlanOption::getDataForSelect($mealplan_id);
        return response()->json($mealPlanOptions);
    }
    /**
     * Create Meal plan
     */
    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'between:1, 64'],
            'description' => ['required', 'between:5, 132'],
            'short_description' => ['between:4, 132'],
            'price' => ['required','numeric'],
            'discount' => ['numeric'],
            'delivery_days' => ['required']
        ]);

        $mealPlan = MealPlan::create($request->only([
            'name','description','short_description', 'price',
            'discount', 'delivery_days', 'quota', 'delivery_type', 'status'
        ]));
        return response()->json($mealPlan);
    }

    public function createOption(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'between:1,64'],
            'display_type' => ['required', 'between:1,48'], // in:Business,Company,Personal,Online Shopping,Others
            'optionValues' => ['required'],
            'optionValues.*.value' => 'required|string',
            'optionValues.*.price' => 'required|numeric'
        ]);

        // display type == radio, input, checkbox
        $mealPlanOption = MealPlanOption::create($request->only(['name', 'display_type', 'status', 'required']));
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
            'meal_plan_option_id' => ['required', ],
            'meal_plan_ids' => ['required', 'array']
        ]);
        $data = $request->all();

        $mealPlanOption = MealPlanOption::find($data['meal_plan_option_id']);

        if (!$mealPlanOption) {
            return response()->json(['message' => 'Meal plan option not found'], 404);
        }

        $mealPlanOption->mealPlans()->sync($data['meal_plan_ids']);
        return response()->json($mealPlanOption);
    }

    // Edit MealPlan Admin side
    public function edit($id)
    {
        $mealPlan = MealPlan::find($id);
        return new MealPlanResource($mealPlan);
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
            'description' => ['required', 'between:5, 132'],
            'short_description' => ['between:4, 132'],
            'price' => ['required','numeric'],
            'discount' => ['numeric'],
            'delivery_days' => ['required']
        ]);

        $mealPlan->update($request->only([
                'name','description','short_description', 
                'price', 'discount', 'delivery_days', 'quota', 'delivery_type', 'status'
        ]));
        return new MealPlanResource($mealPlan);
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

    public function mealPlanList()
    {
        $mealplans = MealPlan::getAllActiveDataForSelect();
        return response()->json($mealplans);
    }

    public function mealPlanOptionsList()
    {
        $options = MealPlan::getAllActiveDataForSelect();
        return response()->json($options);
    }

    public function removeMealPlanAddon($mealPlanID, $optionID)
    {
        $addOnRemoved = MealPlanAddon::where([
            'meal_plan_id' => $mealPlanID,
            'meal_plan_option_id' => $optionID
        ])->delete();
        return response()->json(['success' =>'removed']);
    }
    
    public function mealPlanOrderData()
    {
        $mealPlans = MealPlan::where('status', MealPlan::ACTIVE)->get();
        return MealPlanOrderResource::collection($mealPlans)->collection;
    }

    public function addMedia(Request $request)
    {
        $mealPlan = MealPlan::find($request->id);

        if ($request->hasFile('image')) {
            $mealPlan->clearMediaCollection('mealPlanImage');
            $mealPlan->addMediaFromRequest('image')->toMediaCollection('mealPlanImage');
        }

        return new MealPlanResource($mealPlan);
    }

    public function removeMedia(Request $request)
    {
        $mealPlan = MealPlan::find($request->id);
        $this->validate($request, [
            'media_id' => 'required',
        ]);
        Media::findOrFail($request->media_id)->delete();

        return new MealPlanResource($mealPlan);
    }

}
