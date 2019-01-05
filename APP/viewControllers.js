src = 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js'
src = 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.min.js'
//This script is used too create all the controllers

module.exports
{
    angular.module('indexApp.controllers', []);
    angular.module('intermediateApp.controllers', [])
    angular.module('basicApp.controller', [])
    angular.module('advancedApp.controllers', [])
    angular.module('profileApp.controllers', [])

    angular.module('indexApp.controllers').controller('BasicController', ['$scope', '$http', function ($scope, $http) {
    }]);

    angular.module('intermediateApp.controllers').controller('IntermediateController', ['$scope', '$http', function ($scope, $http) {
    }]);

    angular.module('basicApp.controllers').controller('AdvancedController', ['$scope', '$http', function ($scope, $http) {
    }]);

    angular.module('advancedApp.controllers').controller('ProfileController', ['$scope', '$http', function ($scope, $http) {
    }]);

    angular.module('profileApp.controllers').controller('ProfileController', ['$scope', '$http', function ($scope, $http) {
    }]);


    profileApp.controller('ProfileController', function ($scope) {
        $scope.message = "This is the Profile section of the JavaScript learning"
    })

    advancedApp.controller('AdvancedController', function ($scope) {
        $scope.message = "This is the advanced section of the JavaScript learning"
    })

    intermediateApp.controller('IntermediateController', function ($scope) {
        $scope.message = "This is the intermediate section of the JavaScript learning"
    })

    basicApp.controller('BasicController', function ($scope) {
        $scope.message = "This is the basic section of the JavaScript learning"
    })
}