var app = angular.module("myApp", ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/views/vue1.html',
                controller: "myCtrl"
            })

        .when("/page2", {
                templateUrl: 'app/views/vue2.html',
                controller: "myCtrl2",
                resolve: {
                    maliste: function(eleveFactory) {
                        return eleveFactory.query();
                    }
                }
            })
            .when("/eleve/:id", {
                templateUrl: 'app/views/profil.html',
                controller: "profil.ctrl"
            })
            .otherwise({
                redirectTo: '/',

            });
    }
]);

app.config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);