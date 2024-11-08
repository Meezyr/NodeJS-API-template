const authRoutes = require("../routes/authRoutes");
const exampleRoutes = require("../routes/exampleRoutes");

module.exports = (app) => {
    app.use('/api/auth', authRoutes);
    app.use('/api/example', exampleRoutes);
}