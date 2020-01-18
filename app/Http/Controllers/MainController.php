<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    //
    public function renderView(){

        $tok=null;

        return view('welcome',compact('tok'));
    }
}
