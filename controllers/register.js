var UserModel = require('../models/user');
var registerController = function (request, reply) {
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
module.exports = registerController;
