
let express = require('express');
// let mongoose = require('mongoose');

module.exports = class Server {
	constructor(config) {

		this.config         = config;

		// config.db.uri		= process.env.MONGODB_DB_URI			|| config.db.uri;
		config.server.port 	= process.env.PORT 						|| config.server.port;

		this.app = express();
		// mongoose.connect(config.db.uri);
		// this.models = require('./models')(mongoose);
		// require('./auth')(config, app, mongoose, models.User);
		// var userRouter = express.Router();
		// app.use('/u', userRouter)
		// require('./api')(userRouter, models)
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


