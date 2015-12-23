var Hapi = require('hapi');
var Joi = require('joi');
var UserModel = require('../models/user');
var register ={
    method: 'POST',
    path: '/api/Register',
    config: {
        tags: ['api'],
        description: 'Create account',
        notes: 'Create account',
        validate: {
            payload: {
                firstname: Joi.string().required(),
                lastname: Joi.string().required(),
                password: Joi.string().required(),
                email: Joi.string().required()
            }
        }
    },
    handler: function (request, reply) {
        var user = new UserModel(request.payload);
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
