angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$cordovaDeviceMotion',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDeviceMotion) {
	 // watch Acceleration
  	var options = { frequency: 2000 };
  	var watch = $cordovaDeviceMotion.watchAcceleration(options);
	$scope.getWatchDeviceMotion = function(){
		 watch.then(null,
		 	function(err) {
	      		alert('Algo salio mal ', err);
	    	}
		 	,function(result) {
		      $scope.x = result.x;
		      $scope.y = result.y;
		      $scope.z = result.z;
		      $scope.timeStamp = result.timestamp;
	    });
	}

	$scope.getStopWatchDeviceMotion = function(){
		$cordovaDeviceMotion.clearWatch(watch)
      .then(function(result) {
        alert('Stop Accelerometer');
        }, function (error) {
        // error
      });
	};


}])