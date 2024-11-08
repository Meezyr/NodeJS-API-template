const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('../models/userModel');

const database = new Sequelize(process.env.DB_BASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    port: process.env.DB_PORT,
    dialectOptions: {
        timezone: 'Etc/GMT-2',
    },
    logging: false
})

const User = UserModel(database, DataTypes)

const initDb = () => {
    // return database.sync({force: true})
    return database.sync()
        .then(_ => {
            console.log('The database has been initialized.')
        })
        .catch(err => console.error(err))
}

module.exports = {
    database, initDb, User
}