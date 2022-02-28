module.exports = function (sequelize, DataTypes) {
    const { INTEGER, FLOAT, CHAR, DECIMAL } = DataTypes
    return sequelize.define('schemereturns', {
        schid: {
            type: INTEGER,
            allowNull: true,
            unique: true
        },
        '1Day': FLOAT,
        '7Day': FLOAT,
        '15Day': FLOAT,
        '30Day': FLOAT,
        '3Month': FLOAT,
        '6Month': FLOAT,
        '1Year': FLOAT,
        '2Year': FLOAT,
        '3Year': FLOAT,
        '5Year': FLOAT,
        '10Year': FLOAT,
        D1Rank: FLOAT,
        D7Rank: FLOAT,
        D15Rank: FLOAT,
        D30Rank: FLOAT,
        M3Rank: FLOAT,
        M6Rank: FLOAT,
        Y1Rank: FLOAT,
        Y2Rank: FLOAT,
        Y3Rank: FLOAT,
        Y5Rank: FLOAT,
        Y10Rank: FLOAT,
        D1Quarter: CHAR(1),
        D7Quarter: CHAR(1),
        D15Quarter: CHAR(1),
        D30Quarter: CHAR(1),
        M3Quarter: CHAR(1),
        M6Quarter: CHAR(1),
        Y1Quarter: CHAR(1),
        Y2Quarter: CHAR(1),
        Y3Quarter: CHAR(1),
        Y5Quarter: CHAR(1),
        Y10Quarter: CHAR(1),
        sinceInceptionReturn: FLOAT,
        '1YearSIPReturn': DECIMAL(10,4),
        '3YearSIPReturn': DECIMAL(10,4),
        '5YearSIPReturn': DECIMAL(10,4),
        '10YearSIPReturn': DECIMAL(10,4),
        '15YearSIPReturn': DECIMAL(10,4),
        '20YearSIPReturn': DECIMAL(10,4),
        sinceInceptionSIPReturn: DECIMAL(10,4),
        }, {
            tableName: 'schemereturns'
        })
}