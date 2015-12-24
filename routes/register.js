var Hapi = require('hapi');
var Joi = require('joi');
var UserModel = require('../models/user');
var controller = require('../controllers/index');
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
    handler: controller.register
};
module.exports = register;
