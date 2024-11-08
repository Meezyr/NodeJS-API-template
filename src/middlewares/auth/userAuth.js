const {selfAuth} = require("./selfAuth");

module.exports = async (req, res, next) => {
    try {
        const auth = await selfAuth(req);
        if (auth) {
            next();
        } else {
            res.status(500).json({message: 'Error during authentication'})
        }
    } catch (e) {
        res.status(401).json({message: e.message});
    }
}