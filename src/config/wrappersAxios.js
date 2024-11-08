const axios = require('axios');
const {exampleAuth, getExampleToken} = require('../middlewares/auth/exampleAuth');
const {isTokenValid} = require("./jwt");

async function wrappersAxiosExample() {
    if (!await getExampleToken() || !await isTokenValid(await getExampleToken())) {
        await exampleAuth();
    }

    return axios.create({
        headers: {
            Authorization: `Bearer ${await getExampleToken()}`
        }
    });
}

module.exports = {
    wrappersAxiosExample,
};