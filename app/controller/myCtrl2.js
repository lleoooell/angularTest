app.controller("myCtrl2", function($scope, $http,liste) {
    // $scope.monTableau = [{nom : "casagrande", prenom:"leo"},{nom : "vador", prenom:"dark"}];
    $scope.maliste = liste;
    console.log(liste);
    console.log($scope.maliste);

});