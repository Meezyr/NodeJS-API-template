const {setAccessToken, setRefreshToken, verifyToken} = require('../config/jwt');
const logger = require("../config/logger");

async function loginUserAuth(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!username && !password) {
        res.status(500).json({
            message: "The username and password are not provided."
        });
        return;
    }

    try {
        // Verify logic for user auth
        const userAuth = null;

        if (userAuth) {
            // Logic of created or logged user
            res.status(200).json({accessToken: setAccessToken('userId'), refreshToken: setRefreshToken('userId')}); // If it's good
        } else {
            logger.info('Un utilisateur a essayé de se connecter, sans succès.', {
                type: 'Authentification',
                user: null
            });

            res.status(500).json({
                message: "The username or password provided is invalid."
            });
        }
    } catch (error) {
        res.status(500).json({message: "User was not found.", data: error.message});
    }
}

async function refreshTokenAuth(req, res) {
    const authorizationHeader = req.headers.authorization

    if (!authorizationHeader) {
        res.status(401).json({message: 'You have not provided an authentication token. Add one to the request header.'});
    }

    try {
        const result = await verifyToken(authorizationHeader, 'refresh');

        if (result instanceof Error) {
            res.status(401).json({message: result.message});
        } else if (result) {
            const userId = result.userId;

            res.status(200).json({accessToken: setAccessToken(userId), refreshToken: setRefreshToken(userId)})
        }
    } catch (error) {
        res.status(401).json({message: error.message});
    }
}

module.exports = {
    loginUserAuth, refreshTokenAuth
}