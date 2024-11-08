const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const sequelize = require('./src/config/database');
const cors = require("cors");

const app = express();
const port = process.env.APP_PORT;

app.use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())
    .use(cors({
        origin: process.env.FRONT_URL,
    }));

sequelize.initDb();

require('./src/middlewares/auth/auth')(app);

require('./src/config/routes')(app);

app.listen(port, () => {
    console.log(`API start on : http://localhost:${port}`)
});