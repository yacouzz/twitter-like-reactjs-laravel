<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @if($tok)
        <meta name="token-ta3i" content="{{$tok['token'] }}">
        @endif
        <title>Laravel</title>

        <!-- Fonts -->
        <?php header("Access-Control-Allow-Origin: *"); ?>
        <?php header("Access-Control-Allow-Methods: *"); ?>
        <?php header("Access-Control-Allow-Headers: *"); ?>
     <link rel="dns-prefetch" href="//fonts.gstatic.com">
     <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

     <!-- Styles -->
     <link href="{{ asset('css/app.css') }}" rel="stylesheet">
     <link href="{{ asset('css/style.css') }}" rel="stylesheet">


    </head>
    <body>

        <div id="example">

        </div>

    <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
