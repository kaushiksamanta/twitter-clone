var Hapi = require('hapi');
var Joi = require('joi');
var UserModel = require('../models/user');
var login ={
    method: 'POST',
    path: '/api/Login',
    config: {
        // "tags" enable swagger to document API
        tags: ['api'],
        description: 'Login Into Your Account',
        notes: 'Login Into Your Account',
        // We use Joi plugin to validate request
        validate: {
            payload: {
                email: Joi.string().required(),
                password: Joi.string().required()
            }
        }
    },
    handler: function (request, reply) {

      UserModel.find({email: request.payload.email}, function (error, data) {
          if (error) {
              reply({
                  statusCode: 503,
                  message: 'Failed to get data',
                  data: error
              });
          } else {
              if (data.length === 0) {
                  reply({
                      statusCode: 200,
                      message: 'User Not Found',
                      data: data
                  });
              } else {
                  reply({
                      statusCode: 200,
                      message: 'User Data Successfully Fetched',
                      data: data
                  });
              }
          }
      });
    }
};
module.exports = login;
