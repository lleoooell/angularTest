app.factory('eleveFactory',function($resource){
	// var truc = 'je suis une donnée de la factory';
	// return {
	// 	fullListe : function(){
	// 		 return $resource('http://localhost:3000/api/liste/:userId', {userId:'@id'});
	// 	}
	// }
	return $resource('http://localhost:3000/api/liste/:userId', {userId:'@id'});
});


// app.factory('eleveFactory', ['$resource',
// 	function($resource) {
// 		return $resource('http://localhost:3000/api/liste/:userId', { aifmId: '@_id'
// 		}, {
// 			update: {
// 				method: 'PUT'
// 			}
// 		});
// 	}
// ]);
