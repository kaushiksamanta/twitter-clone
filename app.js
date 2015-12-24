var Hapi = require('hapi');
var Joi = require('joi');
var routes = require('./routes/index');
var config = require('./config/config');
var server = new Hapi.Server();
var mongoose = require('mongoose');
mongoose.connect(config.mongo.host);
server.connection(config.server);
server.register({
    register: require('hapi-swagger'),
    options: {
        apiVersion: "0.0.1"
    }
}, function (err) {
    if (err) {
        server.log(['error'], 'hapi-swagger load error: ' + err)
    } else {
        server.log(['start'], 'hapi-swagger interface loaded')
    }
});
server.route(routes.register);
server.route(routes.login);
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
