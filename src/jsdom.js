
// create a dom without browser for test/ scrape etc..
const jquery = require('jquery');
const JSDOM = require('jsdom').JSDOM;

let options = {}

JSDOM.fromFile('index.html', options)
.then(dom => {
    console.log(dom.serialize());
})

