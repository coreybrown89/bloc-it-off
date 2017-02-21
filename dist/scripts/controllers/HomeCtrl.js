 (function() {
 	function HomeCtrl($firebaseArray) {

 		var ref = firebase.database().ref();
 		var tasksRef = ref.child('tasks');
 		var query = tasksRef.orderByChild('timestamp');
		var list = $firebaseArray(query);

 		this.list = list;

 	}

	angular
		.module('blocItOff')
		.controller('HomeCtrl', ['$firebaseArray',HomeCtrl]);

})(); 

