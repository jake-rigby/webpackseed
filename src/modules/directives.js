
import ng from 'angular';

ng.module('directives', [])

.directive('myDirective', function () {
  return {
    template:'<h1>HELLO</h1>',
    link: function (scope, elem, attrs) {
      console.log('directive');
    }
  }
})

