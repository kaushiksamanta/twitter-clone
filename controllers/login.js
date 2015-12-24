var UserModel = require('../models/user');
var loginController = function (request, reply) {

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
module.exports = loginController;
