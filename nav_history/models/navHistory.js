module.exports = function (sequelize, DataTypes) {
    return sequelize.define('navhistory', {
        schid: {
            type: DataTypes.INTEGER(11),
            feild: 'schid'
        },
        navDate: {
            type: DataTypes.DATE,
            feild: 'navDate'
        },
        nav: {
            type: DataTypes.DECIMAL(18, 4),
            feild: 'nav'
        },
        iwellCode: {
            type: DataTypes.STRING(20),
            allowNull: false,
            feild: 'iwellCode'
        },
        age: {
            type: DataTypes.CHAR(1),
            feild: 'age'
        },
        isNew: {
            type: DataTypes.INTEGER,
            defaultValue: '0',
            feild: 'isNew'
        },
        manual: {
            type: DataTypes.INTEGER,
            feild: 'manual'
        }
    }, {
        tableName: 'navhistory'
    })
}