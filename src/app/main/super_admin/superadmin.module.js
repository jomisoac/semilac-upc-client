(function(){
	'use strict';
	angular
	.module('app.superadmin', [
		'app.superadmin.registrar_director',
		])
			.config(config);
	function config(msNavigationServiceProvider){
		// Navigation
		msNavigationServiceProvider.saveItem('superadmin', {
			title : 'Registrar Director',
			group : true,
			weight: 1,
			hidden: function(){
				return authProvider.checkUser(['SUPER_ADMIN']);
			}
		});

		msNavigationServiceProvider.saveItem('superadmin.registrar_director', {
			title    : 'Registrar Director',
			icon     : 'icon-tile-four',
			state    : 'app.superadmin_registrar_director',
			/*stateParams: {
			 'param1': 'page'
			 },*/
			weight   : 1,
			hidden: function(){
				return authProvider.checkUser(['SUPER_ADMIN']);
			}
		});
	}

})();