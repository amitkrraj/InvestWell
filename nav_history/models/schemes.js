module.exports = function (sequelize, DataTypes) {
    return sequelize.define('schemes',{
        fundid: DataTypes.INTEGER,
        schid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoInceament: false
        },
        name: DataTypes.STRING(150),
        iwellCode: DataTypes.STRING(20),
        camsCode1: DataTypes.STRING(15),
        camsCode2: DataTypes.STRING(15),
        fsid: DataTypes.STRING(50),
        objectiveid: DataTypes.INTEGER,
        productType: DataTypes.CHAR(2)
    },{
        tableName: 'schemes'
    })
}