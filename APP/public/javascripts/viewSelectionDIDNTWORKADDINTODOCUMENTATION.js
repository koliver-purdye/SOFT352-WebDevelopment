/* THIS WAS THE ORIGINAL ROUTING PATH */
src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"
src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.min.js"
    var indexApp = angular.module("indexApp", ['ngRoute']);
    indexApp.config(['$routeProvider', function($routeProvider){
    $routeProvider


        .when('http://localhost:63342/SOFT352-WebDevelopment/index.html?_ijt=rk5o14hp8jfle0rqufp78jsd8u#/BasicJS', {
            templateUrl: '../../BasicSection.html',
            controller: 'BasicController'})
        .when('http://localhost:63342/SOFT352-WebDevelopment/index.html?_ijt=rk5o14hp8jfle0rqufp78jsd8u#/IntermediateJS', {
            templateUrl: '../../IntermediateSection.html',
            controller: 'IntermediateController'})
        .when('http://localhost:63342/SOFT352-WebDevelopment/index.html?_ijt=rk5o14hp8jfle0rqufp78jsd8u#/AdvancedJS', {
            templateUrl: '../../AdvancedSection.html',
            controller: 'AdvancedController'})
        .when('http://localhost:63342/SOFT352-WebDevelopment/index.html?_ijt=rk5o14hp8jfle0rqufp78jsd8u#/ProfileJS', {
            templateUrl: '../../ProfileSection.html',
            controller: 'ProfileController'})
        .otherwise({
            redirectTo: 'http://localhost:63342/SOFT352-WebDevelopment/index.html?_ijt=rk5o14hp8jfle0rqufp78jsd8u#/BasicJS'
        });
}]);
