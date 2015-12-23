var Hapi = require('hapi');
var Joi = require('joi');
var UserModel = require('../models/user');
var register ={
    method: 'POST',
    path: '/api/Register',
    config: {
        // "tags" enable swagger to document API
        tags: ['api'],
        description: 'Create account',
        notes: 'Create account',
        // We use Joi plugin to validate request
        validate: {
            payload: {
                // Both name and age are required fields
                firstname: Joi.string().required(),
                lastname: Joi.string().required(),
                password: Joi.string().required(),
                email: Joi.string().required()
            }
        }
    },
    handler: function (request, reply) {

        // Create mongodb user object to save it into database
        var user = new UserModel(request.payload);

        // Call save methods to save data into database
        // and pass callback methods to handle error
        user.save(function (error) {
            if (error) {
                reply({
                    statusCode: 503,
                    message: error
                });
            } else {
                reply({
                    statusCode: 201,
                    message: 'Account Created Successfully'
                });
            }
        });
    }
};
module.exports = register;
