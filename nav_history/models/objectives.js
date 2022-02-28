module.exports = function (sequelize, DataTypes) {
    const { INTEGER, STRING } = DataTypes
    return sequelize.define('objectives', {
        objectiveid: {
            type: INTEGER,
            primarykey: true
        },
        objectiveName: STRING(60),
        AUMObjective: STRING(30),
        dueDiligence: STRING(30),
        SEBIObjective: STRING(30),
        broadObjective: STRING(30),
        portfolioObjective: STRING(25)
    }, {
        tableName: 'objectives'
    })
}