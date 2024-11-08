const {exampleAuth, getExampleToken} = require('./exampleAuth');

module.exports = (app) => {
    app.use('*', async (req, res, next) => {
        if (!await getExampleToken()) {
            await exampleAuth();
        }
        next();
    });
}