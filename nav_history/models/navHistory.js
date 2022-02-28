module.exports = function (sequelize, DataTypes) {
    return sequelize.define('navhistory', {
        schid: DataTypes.INTEGER,
        navDate: DataTypes.DATE,
        nav: DataTypes.DECIMAL(18, 4),
        iwellCode: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        age: DataTypes.CHAR(1),
        isNew: {
            type: DataTypes.INTEGER,
            defaultValue: '0',
        },
        manual: DataTypes.INTEGER
    }, {
        tableName: 'navhistory'
    })
}
