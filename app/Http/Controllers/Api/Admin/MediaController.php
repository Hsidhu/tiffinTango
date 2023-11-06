<?php
namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MediaFile;
use App\Models\MealPlan;

class MediaController extends Controller
{
    public function index()
    {
        $mediaFiles = MediaFile::get();
        return response()->json($mediaFiles);
    }

    public function upload(Request $request)
    {
        // $mediaFile = MediaFile::create([
        //     "name"=> $request->file('file')->getClientOriginalName()
        // ]);
        $meal = MealPlan::first();
        $media = $meal->getFirstMedia();
        $media->delete();

       // $mediaFile->addMedia($request->file('file'))->toMediaCollection();

        return response()->json(['message' => 'File uploaded successfully']);
    }
}