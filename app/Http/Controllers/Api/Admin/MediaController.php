<?php
namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MediaFile;
use App\Models\MealPlan;
use App\Http\Resources\Admin\MediaFileResource;

class MediaController extends Controller
{
    public function index()
    {
        $mediaFiles = MediaFile::get();
        return MediaFileResource::collection($mediaFiles);
    }

    public function upload(Request $request)
    {
        $mediaFile = MediaFile::create([
            "name"=> $request->file('file')->getClientOriginalName()
        ]);
        $mediaFile->addMedia($request->file('file'))->toMediaCollection();

        $mediaFiles = MediaFile::get();
        return MediaFileResource::collection($mediaFiles);
    }

    public function update(Request $request, $id)
    {
        // $mediaFile = MediaFile::create([
        //     "name"=> $request->file('file')->getClientOriginalName()
        // ]);
        $mediaFile = MediaFile::first();
        dd($mediaFile);
        $mediaItem = $mediaFile->getMedia()->first();

        
       
        $meal = MealPlan::first();
        $movedMediaItem = $mediaItem->move($meal);
        

        $media = $meal->getFirstMedia();
        $media->delete();

       // $mediaFile->addMedia($request->file('file'))->toMediaCollection();
    }
}