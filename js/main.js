require.config({
	baseUrl: '../bower_components',
	paths: {
		'requireLib': 'requirejs/require',
		'jquery': 'jquery/dist/jquery.min',
		'foundation': 'foundation/js/foundation/foundation',
		'foundation.topbar': 'foundation/js/foundation/foundation.topbar'
	},
	shim: {
		'foundation.topbar': {
			deps: ['foundation']
		},
		'foundation': {
			deps: ['jquery']
		}
	}
});
require(['foundation.topbar'], function(){
	$(document).foundation();
});
