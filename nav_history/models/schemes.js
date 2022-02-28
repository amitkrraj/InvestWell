module.exports = function (sequelize, DataTypes) {
    const { STRING, INTEGER, CHAR } = DataTypes
    return sequelize.define('schemes',{
        fundid: INTEGER,
        schid: {
            type: INTEGER,
            primaryKey: true,
            autoInceament: false
        },
        name: STRING(150),
        iwellCode: STRING(20),
        camsCode1: STRING(15),
        camsCode2: STRING(15),
        fsid: STRING(50),
        objectiveid: INTEGER,
        productType: CHAR(2)
    },{
            tableName: 'schemes'
    })
}