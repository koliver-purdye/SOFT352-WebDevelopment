
src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"
src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.min.js"
    var indexApp = angular.module("indexApp", ['ngRoute']);
    indexApp.config(['$routeProvider', function($routeProvider){
    $routeProvider

        .when('/BasicJS', {
            templateUrl: 'BasicJS.htm',
            controller: 'BasicController'})
        .when("/IntermediateJS", {
            templateUrl: 'IntermediateJS.htm',
            controller: 'IntermediateController'})
        .when("/AdvancedJS", {
            templateUrl: 'Advanced.htm',
            controller: 'AdvancedController'})
        .when("/ProfileJS", {
            templateUrl: 'Profile.htm',
            controller: 'ProfileController'})
        .otherwise({
            redirectTo: '/BasicJS'
        });
}]);
