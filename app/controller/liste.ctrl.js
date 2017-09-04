app.controller("listeCtrl", function($scope, $http, liste, eleveFactory ) {
    // $scope.monTableau = [{nom : "casagrande", prenom:"leo"},{nom : "vador", prenom:"dark"}];
    //console.log('Controller, listeCtrl');
    //console.log(liste);

    $scope.maliste = liste;
    
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
    // $scope.deleteEleve = function(eleve){
    //     console.log(eleve);
    //     //eleveFactory.delete({userId:eleve._id});
    // };

});