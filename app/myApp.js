var app = angular.module("myApp", ['ngRoute', 'ngResource','ngLodash']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/liste.html',
                controller: "listeCtrl",
                resolve: {
                    liste : function(eleveFactory){
                        console.log('myApp, resolve, liste');
                
                        return eleveFactory.query();

                    }
                }
            })
            .when('/eleve/update/:id', {
                templateUrl: 'app/views/update.html',
                controller: "updateCtrl"
                
            })

            .when("/ajouter", {
                templateUrl: 'app/views/ajouter.html',
                controller: "addCtrl"
                
            })
            .when("/eleve/:id", {
                templateUrl: 'app/views/profil.html',
                controller: "profil.ctrl",
                resolve:{
                    monProfil : function(eleveFactory, $route){
                        console.log($route);
                        console.log($route.current.params.id);
                        return eleveFactory.get({userId : $route.current.params.id});
                    }
                }
            })
            .otherwise({
                redirectTo: '/',

            });
        
    }
]);