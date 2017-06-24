
let express = require('express');
// let mongoose = require('mongoose');

module.exports = class Server {

	constructor(config) {

		this.config = config;
		config.server.port 	= process.env.PORT || config.server.port;

		this.app = express();
		this.app.use(express.static('www'));

		this.app.listen(config.server.port, function () {
			console.log('listening on port '+config.server.port);
		})

		this.app.use(function(err, req, res, next) {
			console.log('ERROR', err.status, err.message);
			console.error(err.stack);
			res.status(err.status || 500);
			res.send(err.message);
		});

	}
}


