module.exports = function (sequelize, DataTypes) {
    return sequelize.define('objectives', {
        objectiveid: {
            type: DataTypes.INTEGER(5),
            primarykey: true,
            allowNull: false,
            field: 'objectiveid'
        },
        objectiveName: {
            type: DataTypes.STRING(60),
            field: 'objectiveName'
        },
        AUMObjective: {
            type: DataTypes.STRING(30),
            field: 'AUMObjective'
        },
        dueDiligence: {
            type: DataTypes.STRING(30),
            field: 'dueDiligence'
        },
        SEBIObjective: {
            type: DataTypes.STRING(30),
            field: 'SEBIObjective'
        },
        broadObjective: {
            type: DataTypes.STRING(30),
            field: 'broadObjective'
        },
        portfolioObjective: {
            type: DataTypes.STRING(25),
            field: 'portfolioObjective'
        },
    }, {
        tableName: 'objectives'
    })
}