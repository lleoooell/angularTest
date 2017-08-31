app.controller("profil.ctrl",['$scope','monProfil', function($scope, monProfil){
	$scope.test = "hello";
	console.log(monProfil);

	$scope.monProfil = monProfil;
	// $http({
	// 	method : 'GET',
	// 	url : 'http://localhost:3000/api/liste/' + $routeParams.id
	// }).then(function success(response){
	// 	console.log(response);
	// 	$scope.monProfil = response.data;
	// }, function error(response){
	// 	console.log(response);

	// });

}]);