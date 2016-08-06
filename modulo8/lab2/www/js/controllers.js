angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$cordovaDeviceMotion',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDeviceMotion) {
	$scope.getCurrentDeviceMotion = function(){
		$cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
		      $scope.x = result.x;
		      $scope.y = result.y;
		      $scope.z = result.z;
		      $scope.timeStamp = result.timestamp;
	    }, function(err) {
	      // An error occurred. Show a message to the user
	    });
	}


}])