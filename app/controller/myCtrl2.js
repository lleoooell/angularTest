app.controller("myCtrl2", function($scope, $http,liste, eleveFactory,lodash) {
    // $scope.monTableau = [{nom : "casagrande", prenom:"leo"},{nom : "vador", prenom:"dark"}];
    $scope.maliste = liste;
    console.log(liste);
    console.log($scope.maliste);

    $scope.deleteEleve = function(eleve, index){
        console.log(eleve);
        eleveFactory.delete({userId:eleve._id});
        // $scope.maliste.splice(index, 1);
    };

    socket.on("eleveDelete",function(socket){
          console.log(socket);
          console.log($scope.maliste);
          var index = lodash.findIndex($scope.maliste, function(o) { return o._id == socket._id; });
          // var index = $scope.maliste.indexOf(socket);
          console.log(index);
          $scope.maliste.splice(index, 1);
          $scope.$apply();

   	});

});