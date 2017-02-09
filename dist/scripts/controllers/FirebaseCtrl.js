(function() {

	// initialize firebase
	var config = {
	    apiKey: "AIzaSyCCnCjjI3pa6FRw97iqccSqzAfbuqZDEc8",
	    authDomain: "bloc-it-off-6a44a.firebaseapp.com",
	    databaseURL: "https://bloc-it-off-6a44a.firebaseio.com",
	    storageBucket: "bloc-it-off-6a44a.appspot.com",
	    messagingSenderId: "92493121697"
	  };
	  firebase.initializeApp(config);


	angular
		.module('blocItOff', ['firebase'])
		.controller('FirebaseCtrl', [ '$scope', '$firebaseArray',
			function($scope, $firebaseArray) {
				var ref = firebase.database().ref();
				var list = $firebaseArray(ref);

				$scope.list = list;

			}	
		]);

})();

