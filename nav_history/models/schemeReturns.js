module.exports = function (sequelize, DataTypes) {
    return sequelize.define('schemereturns', {
        'schid': {
            type: DataTypes.INTEGER(11),
            field:'schid'
        },
        '1Day': {
            type: DataTypes.FLOAT,
            field: '1Day'
        },
        '7Day': {
            type: DataTypes.FLOAT,
            field: '7Day'
        },
        '15Day': {
            type: DataTypes.FLOAT,
            field: '15Day'
        },
        '30Day': {
            type: DataTypes.FLOAT,
            field: '30Day'
        },
        '3Month': {
            type: DataTypes.FLOAT,
            field: '3Month'
        },
        '6Month': {
            type: DataTypes.FLOAT,
            field: '6Month'
        },
        '1Year': {
            type: DataTypes.FLOAT,
            field: '1Year'
        },
        '2Year': {
            type: DataTypes.FLOAT,
            field: '2Year'
        },
        '3Year': {
            type: DataTypes.FLOAT,
            field: '3Year'
        },
        '5Year': {
            type: DataTypes.FLOAT,
            field: '5Year'
        },
        '10Year': {
            type: DataTypes.FLOAT,
            field: '10Year'
        },
        'D1Rank': {
            type: DataTypes.FLOAT,
            field: 'D1Rank'
        },
        'D7Rank': {
            type: DataTypes.FLOAT,
            field: 'D7Rank'
        },
        'D15Rank': {
            type: DataTypes.FLOAT,
            field: 'D15Rank'
        },
        'D30Rank': {
            type: DataTypes.FLOAT,
            field: 'D30Rank'
        },
        'M3Rank': {
            type: DataTypes.FLOAT,
            field: 'M3Rank'
        },
        'M6Rank': {
            type: DataTypes.FLOAT,
            field: 'M6Rank'
        },
        'Y1Rank': {
            type: DataTypes.FLOAT,
            field: 'Y1Rank'
        },
        'Y2Rank': {
            type: DataTypes.FLOAT,
            field: 'Y2Rank'
        },
        'Y3Rank': {
            type: DataTypes.FLOAT,
            field: 'Y3Rank'
        },
        'Y5Rank': {
            type: DataTypes.FLOAT,
            field: 'Y5Rank'
        },
        'Y10Rank': {
            type: DataTypes.FLOAT,
            field: 'Y10Rank'
        },
        'D1Quarter': {
            type: DataTypes.CHAR(1),
            field: 'D1Quarter'
        },
        'D7Quarter': {
            type: DataTypes.CHAR(1),
            field: 'D7Quarter'
        },
        'D15Quarter': {
            type: DataTypes.CHAR(1),
            field: 'D15Quarter'
        },
        'D30Quarter': {
            type: DataTypes.CHAR(1),
            field: 'D30Quarter'
        },
        'M3Quarter': {
            type: DataTypes.CHAR(1),
            field: 'M3Quarter'
        },
        'M6Quarter': {
            type: DataTypes.CHAR(1),
            field: 'M6Quarter'
        },
        'Y1Quarter': {
            type: DataTypes.CHAR(1),
            field: 'Y1Quarter'
        },
        'Y2Quarter': {
            type: DataTypes.CHAR(1),
            field: 'Y2Quarter'
        },
        'Y3Quarter': {
            type: DataTypes.CHAR(1),
            field: 'Y3Quarter'
        },
        'Y5Quarter': {
            type: DataTypes.CHAR(1),
            field: 'Y5Quarter'
        },
        'Y10Quarter': {
            type: DataTypes.CHAR(1),
            field: 'Y10Quarter'
        },
        'sinceInceptionReturn': {
            type: DataTypes.FLOAT,
            field: 'sinceInceptionReturn'
        },
        '1YearSIPReturn': {
            type: DataTypes.DECIMAL(10, 4),
            field: '1YearSIPReturn'
        },
        '3YearSIPReturn': {
            type: DataTypes.DECIMAL(10, 4),
            field: '3YearSIPReturn'
        },
        '5YearSIPReturn': {
            type: DataTypes.DECIMAL(10, 4),
            field: '5YearSIPReturn'
        },
        '10YearSIPReturn': {
            type: DataTypes.DECIMAL(10, 4),
            field: '10YearSIPReturn'
        },
        '15YearSIPReturn': {
            type: DataTypes.DECIMAL(10, 4),
            field: '15YearSIPReturn'
        },
        '20YearSIPReturn': {
            type: DataTypes.DECIMAL(10, 4),
            field: '20YearSIPReturn'
        },
        'sinceInceptionSIPReturn': {
            type: DataTypes.DECIMAL(10, 4),
            field: 'sinceInceptionSIPReturn'
        },
    }, {
        tableName: 'schemereturns'
    })
}