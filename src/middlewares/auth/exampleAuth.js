const axios = require('axios');
let accessTokenExample = null;

async function exampleAuth() {
    try {
        const response = await axios.post('url', {
            domain: 'domain',
            username: 'username',
            password: decodeURIComponent('password')
        }, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        });

        accessTokenExample = response.data.access_token;
        console.log('Connection to Example API completed.');
    } catch (error) {
        console.error('Authentication Example failed: ', error);
        throw new Error("Authentication Example failed");
    }
}

async function getExampleToken() {
    if (!accessTokenExample) {
        await exampleAuth();
    }
    return accessTokenExample;
}

module.exports = {
    exampleAuth, getExampleToken
}