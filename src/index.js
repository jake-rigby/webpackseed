
import './style.scss';

import ng from 'angular';

let gropplj = 'me';

import './modules/directives.js';

ng.module('my-app', [/*'ui-router',*/'directives'])

.run(() => console.log('running still'))
