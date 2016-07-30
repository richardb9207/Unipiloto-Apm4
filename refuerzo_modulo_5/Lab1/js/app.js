angular.module('lab4', ['ngRoute'])

.controller('lab1Controller', function($scope, $filter){
	$scope.name = $filter('uppercase')('Ricardo Andres');
	$scope.id = "1012390507";
	$scope.profession = "Engineer";
	$scope.salary = $filter('currency')(500000);
	$scope.phone = "3108070707";
	$scope.address = "Kr 88c sur 45a 66 int 11";
})

.controller('lab2Controller', function($scope, $filter){
	$scope.angular_filters = [$filter('filter')([1,2,3,4,5,6,7,8,9],5),
		   								  $filter('currency')(50000), 
		   								  $filter('number')(1.514796,3),
		   								  $filter('date')(1469736353733),
		   								  $filter('json')({'name':'value'}),
		   								  $filter('lowercase')('RICARDO ANDRES'), 
		   								  $filter('uppercase')('ricardo andres'), 
		   								  $filter('limitTo')([1,2,3,4,5,6,7,8,9],5), 
		   								  $filter('orderBy')([11,32,43,24,15,63,71,18,29])];
		   		$scope.angular_input = [$scope.name='ricardo andres',
		   								$scope.date='',
		   								$scope.datetl='',
		   								$scope.time='',
		   								$scope.week='',
		   								$scope.month='',
		   								$scope.number=24,
		   								$scope.url='http://www.rock.com',
		   								$scope.email='richardb9207@gmail.com',
		   								$scope.radio='masculino',
		   								$scope.checkbox='No']
})

.controller('lab3Controller', function($scope, $filter){
	$scope.link_image = 'http://dummyimage.com/200x200/000/fff';
    $scope.changeLinkImage = function(_images){
    	$scope.link_image = _images;
    };
})

.config(['$routeProvider', function($routeProvider){

	$routeProvider

	.when('/lab1', {
	    templateUrl : "views/lab1.html",
	    controller: 'lab1Controller'
	})

	.when('/lab2', {
		templateUrl: "views/lab2.html",
		controller: 'lab2Controller'
	})

	.when('/lab3', {
		templateUrl: "views/lab3.html",
		controller: 'lab3Controller'
	})
	
	.otherwise({
	    redirectTo: '/',
	    templateUrl: 'views/otherwise.html'
	});
 }]);