<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//Route::post('login', 'UserController@login');
Route::post('login', 'Auth\LoginController@login');
Route::post('register', 'UserController@register');
Route::post('logout', 'UserController@logout');
<<<<<<< HEAD

=======
>>>>>>> a9560e3643c93e50be06d5b13b07d4f82cb67cd1
Route::group(['middleware' => 'auth:api'], function()
{

   Route::get('details', 'UserController@details');
});



    Route::get('auth/google', 'UserController@redirectToGoogle');
    Route::get('google/callback', 'UserController@handleGoogleCallback');




