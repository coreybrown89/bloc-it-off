(function() {
	function TaskList($firebaseArray){
		var TaskList = {};

		var ref = firebase.database().ref().child('tasks');
		var list = $firebaseArray(ref);


		Tasklist.returnList = function() {
			return list;
		}

		
		return TaskList;

	}

	angular
		.module('blocItOff')
		.factory('TaskList', ['$firebaseArray', TaskList]);


})();