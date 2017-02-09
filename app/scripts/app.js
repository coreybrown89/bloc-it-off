(function() {
	function config($locationProvider, $stateProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requreBase: false
			});

		$stateProvider
			.state('firebase', {
				url: '/',
				controller: 'FirebaseCtrl as firebase'
			});
	}

	angular
		.module('blocItOff', ['ui.router'])
		.config(config);
})();