/* eslint-disable prettier/prettier */
const Sequelize = require("sequelize")


const sequelize = new Sequelize('blog', 'root', 'saidgriouri', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize
