<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],
    'facebook' => [
        'client_id' => '1012933049077885',
        'client_secret' => '6fb0dde2c197ffa87c9cadebf998c607',
        'redirect' => 'http://127.0.0.1:8000/api/callback/facebook',
      ],
      'google' => [
        'client_id' => '1050963595275-70j2jskn0veeirv141siv1dlojfmober.apps.googleusercontent.com',
        'client_secret' => '5QRxqVcpRg47oEfKvgNG3aT4',
        'redirect' => 'http://localhost:8000/google/callback',
    ],

];
