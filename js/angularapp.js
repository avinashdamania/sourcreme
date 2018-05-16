var app = angular.module("myApp", []);
app.controller("myCtrl", myCtrl);

function myCtrl($scope) {
	$scope.date = new Date();
	

}