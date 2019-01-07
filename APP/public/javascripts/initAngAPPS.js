module.exports
{
    const indexApp = angular.module('indexAPP')
    const intermediateApp = angular.module('intermediateApp', ['ngRoute'])
    const basicApp = angular.module('basicApp', ['ngRoute'])
    const advancedApp = angular.module('advancedApp', ['ngRoute'])
    const profileApp = angular.module('profileApp', ['ngRoute'])
}