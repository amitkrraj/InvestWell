module.exports = function (sequelize, DataTypes) {
    return sequelize.define('factsheets', {
        fsid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mdate: DataTypes.DATE,
        corpus: DataTypes.FLOAT,
        vEquity: DataTypes.DECIMAL(10, 5),
        vDebt: DataTypes.DECIMAL(10, 5),
        vOther: DataTypes.DECIMAL(10, 5),
        avgMat: DataTypes.STRING(10),
        fundRat: DataTypes.STRING(5),
        weekHigh: DataTypes.STRING(35),
        weekLow: DataTypes.STRING(35),
        fundCategory: DataTypes.STRING(35),
        type: DataTypes.STRING(30),
        launch: DataTypes.DATE,
        benchmark: DataTypes.STRING(150),
        fundManager: DataTypes.STRING(50),
        FundManagerSince: DataTypes.STRING(20),
        fundObjective: DataTypes.STRING(1000),
        fundRiskGrade: DataTypes.STRING(25),
        fundReturnGrade: DataTypes.STRING(20),
        entryLoad: DataTypes.STRING(400),
        exitLoad: DataTypes.STRING(400),
        rsQuard: DataTypes.STRING(100),
        standardDev: DataTypes.STRING(55),
        sharpRatio: DataTypes.STRING(30),
        mean: DataTypes.STRING(55),
        alpha: DataTypes.STRING(55),
        beta: DataTypes.STRING(20),
        pbRatio: DataTypes.DECIMAL(15, 2),
        peRatio: DataTypes.DECIMAL(15, 2),
        expenseRatio: DataTypes.DECIMAL(15, 2),
        minInitialInv: DataTypes.STRING(20),
        sortiINo: DataTypes.STRING(50),
        colourCode: DataTypes.STRING(50),
        modifiedDuration: DataTypes.STRING(50),
        turnOver: DataTypes.STRING(50),
        ytm: DataTypes.STRING(50),
        fsCode: {
            type: DataTypes.STRING(50),
            unique: true
        },
        largeCap: DataTypes.DECIMAL(5, 2),
        midCap: DataTypes.DECIMAL(5, 2),
        smallCap: DataTypes.DECIMAL(5, 2),
        cash: DataTypes.DECIMAL(5, 2),
        big: DataTypes.DECIMAL(5, 2),
        a: DataTypes.DECIMAL(5, 2),
        aa: DataTypes.DECIMAL(5, 2),
        aaa: DataTypes.DECIMAL(5, 2),
        sov: DataTypes.DECIMAL(5, 2)
    }, {
        tableName: 'factsheets'
    })
}