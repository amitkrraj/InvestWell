const Sequelize = require('sequelize')

module.exports = new Sequelize('iwell2_new', 'root', '113920', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0
    }
})