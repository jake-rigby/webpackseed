
import ng from 'angular';

ng.module('directives', [])

.directive('myDirective', function () {
	return {
		templateUrl: 'templates/my-directive.html',
		scope: {
			msg: '='
		},
		link: function (scope, elem, attrs) {
			console.log('directive >> ', scope.msg);
		}
	}
})

