(function() {
	function config($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requreBase: false
			});
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html',
				controller: 'HomeCtrl as home'
			});
	}

	angular
		.module('blocItOff', ['ui.router', 'firebase'])
		.config(config);
})();  