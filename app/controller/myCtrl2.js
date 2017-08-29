app.controller("myCtrl2", function($scope, $http) {
    // $scope.monTableau = [{nom : "casagrande", prenom:"leo"},{nom : "vador", prenom:"dark"}];
    $http({
        method: 'GET',
        url:'http://localhost:3000/api/liste'
    }).then(function successCallback(response) {
    	console.log(response);
    	$scope.maListe = response.data;
    }, function errorCallback(response) {
    	console.log(response);

    });

});