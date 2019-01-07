
src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"
src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.min.js"
    var indexApp = angular.module("indexApp", ['ngRoute']);
    indexApp.config(['$routeProvider', function($routeProvider){
    $routeProvider

        .when("/BasicJS", {
            templateUrl: 'BasicJS.html',
            controller: 'BasicController'})
        .when("/", {
            templateUrl: 'IntermediateJS.html',
            controller: 'IntermediateController'})
        .when("/BasicJS", {
            templateUrl: 'Advanced.html',
            controller: 'AdvancedController'})
        .when("/BasicJS", {
            templateUrl: 'Profile.html',
            controller: 'ProfileController'})
}]);
