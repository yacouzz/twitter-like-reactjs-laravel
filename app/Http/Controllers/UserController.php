<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use Socialite;
use Illuminate\Support\Facades\Hash;
use Response;
use View;
use Redirect;

class UserController extends Controller
{
public $successStatus = 200;

    public function login (Request $request) {

        $user = User::where('email', $request->email)->first();

        if ($user) {

            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $response = ['token' => $token];
                return response($response, 200);
            } else {
                $response = "Password missmatch";
                return response($response, 422);
            }

        } else {
            $response = 'User does not exist';
            return response($response, 422);
        }

    }


    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
                ]);
        if ($validator->fails()) {
                    return response()->json(['error'=>$validator->errors()], 401);
                }
        $input = $request->all();
                $input['password'] = bcrypt($input['password']);
                $user = User::create($input);
                $success['token'] =  $user->createToken('MyApp')-> accessToken;
                //$success['name'] =  $user->name;
        return response()->json(['success'=>$success,'user'=>$user], $this-> successStatus);
            }

    public function details()
    {
        //Auth::check()?  $user = Auth::user(): $user='walou';
        $user = Auth::user();
        return response()->json(['success' => $user], $this-> successStatus);
    }


    public function logout(){

        Auth::logout();

        return response()->json(['success'=>200]);
    }

    public function redirectToGoogle()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function handleGoogleCallback(Request $r)
    {


            $user = Socialite::driver('google')->stateless()->user();

            $finduser = User::where('google_id', $user->id)->first();

            if($finduser){

                Auth::login($finduser);

                $success['token'] =  $finduser->createToken('MyApp')-> accessToken;
                $tok=$success;
                //return response()->json(['success'=>$success,'user'=>$finduser], $this-> successStatus);
                //return redirect('/')->with('tok',$success);
                return view('welcome', compact('tok'));

            }else{
                $newUser = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'google_id'=> $user->id,
                    'password' => encrypt('123456dummy')
                ]);

                Auth::login($newUser);

                $success['token'] =  $newUser->createToken('MyApp')-> accessToken;
                return response()->json(['success'=>$success,'user'=>$newUser], $this-> successStatus);
            }

    }

   /* public function callback($provider)
    {
      $getInfo = Socialite::driver($provider)->user();
      $user = $this->createUser($getInfo,$provider);
      auth()->login($user);
     // $success['token'] =  $user->createToken('MyApp')-> accessToken;
     $success= $user->token;
      return response()->json(['success'=>$success,'user'=>$user], $this-> successStatus);
    }

    function createUser($getInfo,$provider){
    $user = User::where('provider_id', $getInfo->id)->first();
    if (!$user) {
         $user = User::create([
            'name'     => $getInfo->name,
            'email'    => $getInfo->email,
            'provider' => $provider,
            'provider_id' => $getInfo->id
        ]);
      }
      return $user;
    }
*/
}
