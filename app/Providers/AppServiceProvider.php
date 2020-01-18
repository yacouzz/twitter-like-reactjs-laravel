<?php

namespace App\Providers;

use Laravel\Passport\Passport;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

use App\Resolvers\SocialUserResolver;
use Coderello\SocialGrant\Resolvers\SocialUserResolverInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }


    public $bindings = [
        SocialUserResolverInterface::class => SocialUserResolver::class,
    ];

    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    public function boot()
    {
        $this->registerPolicies();
        Passport::routes();
    }
}
