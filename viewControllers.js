src = 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js'
src = 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.min.js'
//This script is used too create all the controllers


angular.module('indexApp.controllers',[]);

angular.module('indexApp.controllers').controller('BasicController',['$scope','$http', function($scope, $http){}]);

angular.module('indexApp.controllers').controller('IntermediateController',['$scope','$http', function($scope, $http){}]);

angular.module('indexApp.controllers').controller('AdvancedController',['$scope','$http', function($scope, $http){}]);

angular.module('indexApp.controllers').controller('ProfileController',['$scope','$http', function($scope, $http){}]);



indexApp.controller('ProfileController', function($scope){$scope.message = "This is the Profile section of the JavaScript learning"})

indexApp.controller('AdvancedController', function($scope){$scope.message = "This is the advanced section of the JavaScript learning"})

indexApp.controller('IntermediateController', function($scope){$scope.message = "This is the intermediate section of the JavaScript learning"})

indexApp.controller('BasicController', function($scope){$scope.message = "This is the basic section of the JavaScript learning"})