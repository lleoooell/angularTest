app.factory('socketService', ['$resource',
	function($resource) {
		var socket = io.connect('http://localhost:3000');

		// return $resource('/api/liste/:userId', { userId: '@_id'
		// }, {
		// 	update: {
		// 		method: 'PUT'
		// 	}
		// });
	}
]);
