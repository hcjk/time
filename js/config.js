angular.module('app')
    .constant('API_KEY', 'B636b6Ii1a_j1M3v5JsOye7gK7SImnWoedIPT8hp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<home></home>'
            })
            .otherwise({
                redirectTo: '/'
            });
    });