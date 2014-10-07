var fs = require("fs");
var sqlite3 = require("sqlite3").verbose();
var file = __dirname + "/db.sqlite";
global.path = require('path');
var exists = fs.existsSync(file);
if (!exists) {
	console.log("Creating DB file.");
	fs.openSync(file, "w");
}
global.db = new sqlite3.Database(file);
if (!exists) {
	console.log("creating new db");
	db.serialize(function () {
		db.run('CREATE TABLE "users"("user_id" INTEGER PRIMARY KEY NOT NULL, '+
									'"name" BLOB NOT NULL, '+
									'"team_id" INTEGER NOT NULL, '+
									'"is_admin" BOOLEAN NOT NULL, '+
									'"device_type" BOOLEAN NOT NULL, '+
									'"push_token" BOOLEAN NOT NULL, '+
									'"created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP));');
		db.run('CREATE TABLE "teams" (  "team_id" INTEGER PRIMARY KEY NOT NULL, '+
										'"score" BLOB NOT NULL, '+
										'"created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP));');
		db.run('CREATE TABLE "challenges"  ( "challenge_id" BLOB PRIMARY KEY NOT NULL, '+
											'"title" BLOB NOT NULL, '+
											'"type" BLOB NOT NULL, '+
											'"points" INTEGER NOT NULL, '+
											'"description" BLOB NOT NULL, '+
											'"location" BLOB NOT NULL, '+
											'"lat" REAL, '+
											'"long" REAL, '+
											'"deadline" REAL, '+
											'"created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP));');
		db.run('CREATE TABLE "images"  ("image_id" BLOB PRIMARY KEY NOT NULL, '+
										'"image_url" BLOB NOT NULL, '+
										'"team_id" BLOB NOT NULL, '+
										'"user_id" INTEGER NOT NULL, '+
										'"image_text" BLOB, '+
										'"created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP));');
	});
 }

var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');




var routes = require('./routes/index');
var users = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api', users);

app.listen(6969);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;
