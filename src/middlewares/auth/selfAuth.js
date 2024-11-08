const {verifyToken} = require('../../config/jwt');
const {User} = require("../../config/database");

async function selfAuth(req) {
    const authorizationHeader = req.headers.authorization

    if(!authorizationHeader) {
        throw new Error('You have not provided an authentication token. Add one to the request header.')
    }

    try {
        const result = await verifyToken(authorizationHeader, 'access');

        if (result) {
            const user = await User.findByPk(result.userId);

            if (user && user.id === result.userId) {
                req.user = user;

                return result;
            } else {
                throw new Error('The user is non-existent.');
            }
        } else {
            throw new Error('Token verification failed.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    selfAuth
}