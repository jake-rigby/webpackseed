
import ng from 'angular';
// import Thing from '../thing';

ng.module('services', [])

.factory('ThingFactory', function () {
    return function get (label) {
        // return new Thing(label);
    }
})