module.exports = function (sequelize, DataTypes) {
    return sequelize.define('schemes', {
        fundid: DataTypes.INTEGER(11),
        schid: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            field: 'schid'
        },
        name: {
            type: DataTypes.STRING(150),
            field: 'name'
        },
        iwellCode: {
            type: DataTypes.STRING(20),
            field: 'iwellCode'
        },
        camsCode1: {
            type: DataTypes.STRING(15),
            field: 'camsCode1'
        },
        camsCode2: {
            type: DataTypes.STRING(15),
            field: 'camsCode2'
        },
        fsid: {
            type: DataTypes.STRING(50),
            field: 'fsid'
        },
        objectiveid: {
            type: DataTypes.INTEGER(5),
            field: 'objectiveid'
        },
        productType: {
            type: DataTypes.CHAR(2),
            field: 'productType'
        },
    }, {
        tableName: 'schemes'
    })
}