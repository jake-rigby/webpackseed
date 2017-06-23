
import ng from 'angular'; // is an npm dependency

import './style.scss'; // styles must be imported and are included in the JS (!)

let gropplj = 'me'; // gets transpiled

import './modules/directives.js'; // dev3elopment import paths look nice and normal

ng.module('my-app', [/*'ui-router',*/'directives']) // declare angular modules in the usual way

.run(() => console.log('running still')) // yup
