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
            'name' => ['required', 'between:1,64'],
            'description' => ['required', 'between:1,48'],
            'short_description' => ['between:1,48'],
            'price' => ['required','numeric'],
            'discount' => ['numeric'],
            'delivery_days' => ['required']
        ]);

        $mealPlan = MealPlan::create($$request->only([
            'name','description','short_description', 'price',
            'discount', 'delivery_days', 'number_of_meals', 'delivery_type', 'status'
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
            'meal_plan_id' => ['required'],
            'meal_plan_option_id' => ['required', ]
        ]);
        $addOn = $request->only(['meal_plan_id', 'meal_plan_option_id']);

        $mealPlanOption = MealPlanAddon::updateOrCreate(
            $addOn,
            $addOn
        );
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
            'description' => ['required', 'between:1,48'],
            'short_description' => ['between:1,48'],
            'price' => ['required','numeric'],
            'discount' => ['numeric'],
            'delivery_days' => ['required']
        ]);

        //$fileName = $mealPlan->image;
        //$this->addMediaToModel($mealPlan, $request->file('mediaFileId'));

        if(!empty($request->file('file'))) {
            unlink(storage_path('app/public/'.$fileName));
            $fileName = $this->fileStoreName($request->file('file'));
            $request->file('file')->storeAs('public/mealplan', $fileName);
            $request->merge(['image' => 'mealplan/'.$fileName]);
        }
        $mealPlan->update($request->only([
                'name','description','short_description', 
                'price', 'discount', 'delivery_days', 'number_of_meals', 'delivery_type', 'status'
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
        return MealPlanOrderResource::collection($mealPlans)->collection;
    }


    private function addMediaToModel(MealPlan $mealPlan, $mediaFileId)
    {
        $mediaFile = MediaFile::find($mediaFileId);
        $mediaItem = $mediaFile->getMedia()->first();
        $mediaItem->move($mealPlan);
    }
}
