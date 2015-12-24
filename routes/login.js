var Hapi = require('hapi');
var Joi = require('joi');
var UserModel = require('../models/user');
var controller = require('../controllers/index');
// var loginController = require('../controllers/login');
var login ={
    method: 'POST',
    path: '/api/Login',
    config: {
        tags: ['api'],
        description: 'Login Into Your Account',
        notes: 'Login Into Your Account',
        validate: {
            payload: {
                email: Joi.string().required(),
                password: Joi.string().required()
            }
        }
    },
    handler: controller.login
};
module.exports = login;
