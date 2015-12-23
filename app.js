var Hapi = require('hapi');
var Joi = require('joi');
var register = require('./routes/register');
var login = require('./routes/login');
var server = new Hapi.Server();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/twitterclone');
server.connection({port: 7002});
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
server.route(register);
server.route(login);
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
