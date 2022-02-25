module.exports = function (sequelize, DataTypes) {
    return sequelize.define('objectives', {
        objectiveid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true
        },
        objectiveName: DataTypes.STRING(60),
        AUMObjective: DataTypes.STRING(30),
        dueDiligence: DataTypes.STRING(30),
        SEBIObjective: DataTypes.STRING(30),
        broadObjective: DataTypes.STRING(30),
        portfolioObjective: DataTypes.STRING(25)
    }, {
        tableName: 'objectives'
    })
}
