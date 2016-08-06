angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$stateParams','$rootScope', '$cordovaNetwork', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $rootScope, $cordovaNetwork) {
	$scope.getNetwork = function(){
		$scope.type = $cordovaNetwork.getNetwork();
    	$scope.isOnline = $cordovaNetwork.isOnline();
	    $scope.isOffline = $cordovaNetwork.isOffline();
    // listen for Online event
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      var onlineState = networkState;
    });

    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
      var offlineState = networkState;
    });
	}
}])
 