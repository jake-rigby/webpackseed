
import ng from 'angular';

ng.module('directives', [])

.directive('myDirective', function () {
  return {
    template:'<h1 id="testy">HELLO</h1>',
    link: function (scope, elem, attrs) {
      console.log('directive');
    }
  }
})

