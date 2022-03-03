module.exports = function (sequelize, DataTypes) {
    return sequelize.define('factsheets', {
        fsid: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'fsid'
        },
        mdate: {
            type: DataTypes.DATE,
            field: 'mdate'
        },
        corpus: {
            type: DataTypes.FLOAT,
            field: 'corpus'
        },
        vEquity: {
            type: DataTypes.DECIMAL(10, 5),
            field: 'vEquity'
        },
        vDebt: {
            type: DataTypes.DECIMAL(10, 5),
            field: 'vDebt'
        },
        vOther: {
            type: DataTypes.DECIMAL(10, 5),
            field: 'vOther'
        },
        avgMat: {
            type: DataTypes.STRING(10),
            field: 'avgMat'
        },
        fundRat: {
            type: DataTypes.STRING(5),
            field: 'fundRat'
        },
        weekHigh: {
            type: DataTypes.STRING(35),
            field: 'weekHigh'
        },
        weekLow: {
            type: DataTypes.STRING(35),
            field: 'weekLow'
        },
        fundCategory: {
            type: DataTypes.STRING(35),
            field: 'fundCategory'
        },
        type: {
            type: DataTypes.STRING(30),
            field: 'type'
        },
        launch: {
            type: DataTypes.DATE,
            field: 'launch'
        },
        benchmark: {
            type: DataTypes.STRING(150),
            field: 'benchmark'
        },
        fundManager: {
            type: DataTypes.STRING(50),
            field: 'fundManager'
        },
        FundManagerSince: {
            type: DataTypes.STRING(20),
            field: 'fundManagerSince'
        },
        fundObjective: {
            type: DataTypes.STRING(1000),
            field: 'fundObjective'
        },
        fundRiskGrade: {
            type: DataTypes.STRING(25),
            field: 'fundRiskGrade'
        },
        fundReturnGrade: {
            type: DataTypes.STRING(20),
            field: 'fundReturnGrade'
        },
        entryLoad: {
            type: DataTypes.STRING(400),
            field: 'entryLoad'
        },
        exitLoad: {
            type: DataTypes.STRING(400),
            field: 'exitLoad'
        },
        rsQuard: {
            type: DataTypes.STRING(100),
            field: 'rsQuard'
        },
        standardDev: {
            type: DataTypes.STRING(55),
            field: 'standardDev'
        },
        sharpRatio: {
            type: DataTypes.STRING(30),
            field: 'sharpRatio'
        },
        mean: {
            type: DataTypes.STRING(55),
            field: 'mean'
        },
        alpha: {
            type: DataTypes.STRING(55),
            field: 'alpha'
        },
        beta: {
            type: DataTypes.STRING(20),
            field: 'beta'
        },
        pbRatio: {
            type: DataTypes.DECIMAL(15, 2),
            field: 'pbRatio'
        },
        peRatio: {
            type: DataTypes.DECIMAL(15, 2),
            field: 'peRatio'
        },
        expenseRatio: {
            type: DataTypes.DECIMAL(15, 2),
            field: 'expenseRatio'
        },
        minInitialInv: {
            type: DataTypes.STRING(20),
            field: 'minInitialInv'
        },
        sortiINo: {
            type: DataTypes.STRING(50),
            field: 'sortiINo'
        },
        colourCode: {
            type: DataTypes.STRING(50),
            field: 'colourCode'
        },
        modifiedDuration: {
            type: DataTypes.STRING(50),
            field: 'modifiedDuration'
        },
        turnOver: {
            type: DataTypes.STRING(50),
            field: 'turnOver'
        },
        ytm: {
            type: DataTypes.STRING(50),
            field: 'ytm'
        },
        fsCode: {
            type: DataTypes.STRING(50),
            field: 'fsCode'
        },
        largeCap: {
            type: DataTypes.DECIMAL(5, 2),
            field: 'largeCap'
        },
        midCap: {
            type: DataTypes.DECIMAL(5, 2),
            field: 'midCap'
        },
        smallCap: {
            type: DataTypes.DECIMAL(5, 2),
            field: 'smallCap'
        },
        cash: {
            type: DataTypes.DECIMAL(5, 2),
            field: 'cash'
        },
        big: {
            type: DataTypes.DECIMAL(5, 2),
            field: 'big'
        },
        a: {
            type: DataTypes.DECIMAL(5, 2),
            field: 'a'
        },
        aa: {
            type: DataTypes.DECIMAL(5, 2),
            field: 'aa'
        },
        aaa: {
            type: DataTypes.DECIMAL(5, 2),
            field: 'aaa'
        },
        sov: {
            type: DataTypes.DECIMAL(5, 2),
            field: 'sov'
        }
    }, {
        tableName: 'factsheets'
    })
}