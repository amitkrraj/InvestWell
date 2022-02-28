module.exports = function (sequelize, DataTypes) {
    const { INTEGER, DECIMAL, FLOAT, STRING } = DataTypes
    return sequelize.define('factsheets', {
    fsid: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mdate: DataTypes.DATE,
    corpus: FLOAT,
    vEquity: DECIMAL(10, 5),
    vDebt: DECIMAL(10, 5),
    vOther: DECIMAL(10, 5),
    avgMat: STRING(10),
    fundRat: STRING(5),
    weekHigh: STRING(35),
    weekLow: STRING(35),
    fundCategory: STRING(35),
    type: STRING(30),
    launch: DataTypes.DATE,
    benchmark: STRING(150),
    fundManager: STRING(50),
    FundManagerSince: STRING(20),
    fundObjective: STRING(1000),
    fundRiskGrade: STRING(25),
    fundReturnGrade: STRING(20),
    entryLoad: STRING(400),
    exitLoad: STRING(400),
    rsQuard: STRING(100),
    standardDev: STRING(55),
    sharpRatio: STRING(30),
    mean: STRING(55),
    alpha: STRING(55),
    beta: STRING(20),
    pbRatio: DECIMAL(15, 2),
    peRatio: DECIMAL(15, 2),
    expenseRatio: DECIMAL(15, 2),
    minInitialInv: STRING(20),
    sortiINo: STRING(50),
    colourCode: STRING(50),
    modifiedDuration: STRING(50),
    turnOver: STRING(50),
    ytm: STRING(50),
    fsCode: {
        type: STRING(50),
        unique: true
    },
    largeCap: DECIMAL(5, 2),
    midCap: DECIMAL(5, 2),
    smallCap: DECIMAL(5, 2),
    cash: DECIMAL(5, 2),
    big: DECIMAL(5, 2),
    a: DECIMAL(5, 2),
    aa: DECIMAL(5, 2),
    aaa: DECIMAL(5, 2),
    sov: DECIMAL(5, 2)
    }, {
        tableName: 'factsheets'
    })
}