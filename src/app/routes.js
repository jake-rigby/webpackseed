
import '@uirouter/angularjs';

import ng from 'angular';

ng.module('routes', [
    'ui.router'
])

.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider

	.state('hello', {
		url: '/hello',
        template: '<my-directive msg="\'hello\'"></my-directive>'
	})

    .state('world', {
        url: '/world',
        template: '<my-directive msg="\'..world\'"></my-directive>'
    })

    $urlRouterProvider.otherwise('/hello');
})