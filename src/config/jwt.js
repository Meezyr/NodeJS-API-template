const jwt = require('jsonwebtoken');
const {readFileSync} = require("node:fs");
const forge = require('node-forge');

const passphraseAccess = process.env.ACCESS_JWT_PASSPHRASE;
const passphraseRefresh = process.env.REFRESH_JWT_PASSPHRASE;
const encryptedPrivateAccessKey = readFileSync('keys/private_access_keys.pem', 'utf8');
const encryptedPrivateRefreshKey = readFileSync('keys/private_refresh_keys.pem', 'utf8');
const publicAccessKey = readFileSync('keys/public_access_keys.pem', 'utf8');
const publicRefreshKey = readFileSync('keys/public_refresh_keys.pem', 'utf8');

function decryptPrivateKey(encryptedKey, passphrase) {
    const privateKeyPem = forge.pki.decryptRsaPrivateKey(encryptedKey, passphrase);
    if (!privateKeyPem) {
        throw new Error('Failed to decrypt private key. Check your passphrase.');
    }
    return forge.pki.privateKeyToPem(privateKeyPem);
}

const privateAccessKey = decryptPrivateKey(encryptedPrivateAccessKey, passphraseAccess);
const privateRefreshKey = decryptPrivateKey(encryptedPrivateRefreshKey, passphraseRefresh);

function setAccessToken(userId) {
    return jwt.sign(
        {userId: userId},
        {key: privateAccessKey, passphrase: passphraseAccess},
        {algorithm: 'RS256', expiresIn: '24h'}
    );
}

function setRefreshToken(userId) {
    return jwt.sign(
        {userId: userId},
        {key: privateRefreshKey, passphrase: passphraseRefresh},
        {algorithm: 'RS256', expiresIn: '5d'}
    )
}

async function verifyToken(authorizationHeader, type) {
    const token = authorizationHeader.split(' ')[1];

    if (!token) {
        throw new Error('The user is not authenticated.');
    }

    const publicKey = type === 'access' ? publicAccessKey : publicRefreshKey;

    try {
        return await jwt.verify(token, publicKey, {algorithms: ['RS256']});
    } catch (error) {
        throw new Error(`The user is not authorized to access this resource: ${error.message}`);
    }
}

async function isTokenValid(token) {
    try {
        const decoded = jwt.decode(token);
        if (!decoded || !decoded.exp) {
            return false;
        }

        const now = Math.floor(Date.now() / 1000);
        return decoded.exp > now;
    } catch (error) {
        return false;
    }
}

module.exports = {
    setAccessToken, setRefreshToken, verifyToken, isTokenValid
}