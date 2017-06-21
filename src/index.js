
import ng from 'angular';

import './modules/directives.js';

ng.module('my-app', [/*'ui-router',*/'directives'])

.run(() => console.log('running'))
