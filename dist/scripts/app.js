(function(){
	function config($locationProvider) 
		$locationProvider
			.html5Mode({
				enabled: true,
				requreBase: false
			});
	}

	angular
		.module('blocItOff', ['ui.router'])
		.config(config);


})();