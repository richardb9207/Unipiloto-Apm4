angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('page1Ctrl', function($scope) {

})
   
.controller('page2Ctrl', function($scope) {

})
   
.controller('page3Ctrl', function($scope) {

})

.controller('page4Ctrl', function($scope) {
  $scope.friends = [
    {name:'John', age:25, gender:'boy'},
    {name:'Jessie', age:30, gender:'girl'},
    {name:'Johanna', age:28, gender:'girl'},
    {name:'Joy', age:15, gender:'girl'},
    {name:'Mary', age:28, gender:'girl'},
    {name:'Peter', age:95, gender:'boy'},
    {name:'Sebastian', age:50, gender:'boy'},
    {name:'Erika', age:27, gender:'girl'},
    {name:'Patrick', age:40, gender:'boy'},
    {name:'Samantha', age:60, gender:'girl'}];
})

.controller('page5Ctrl', function($scope, $state) {
	$scope.go = function(email, pass){
		localStorage.setItem('email', email);
		localStorage.setItem('pass', pass);
		$state.go('page6');
	}
})

.controller('page6Ctrl', function($scope) {
	$scope.email = localStorage.getItem('email');
	$scope.password = localStorage.getItem('pass');
})
 