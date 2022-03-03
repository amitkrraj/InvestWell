module.exports = function (sequelize,DataTypes) {
    return sequelize.define('schemedetails',{
        schid: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            field: 'schid'
        },
        orgsch: {
            type: DataTypes.STRING(250),
            field: 'orgsch'
        },
        rta: {
            type: DataTypes.STRING(2),
            field: 'rta'
        },
        type: {
            type: DataTypes.STRING(10),
            field: 'type'
        },
        category: {
            type: DataTypes.STRING(60),
            field: 'category'
        },
        bseCode: {
            type: DataTypes.STRING(25),
            field: 'bseCode'
        },
        nseCode: {
            type: DataTypes.STRING(25),
            field: 'nseCode'
        },
        isinNo: {
            type: DataTypes.STRING(30),
            field: 'isinNo'
        },
        feCode: {
            type: DataTypes.STRING(10),
            field: 'feCode'
        },
        dirPlan: {
            type: DataTypes.STRING(2),
            field: 'dirPlan'
        },
        NSEProductType: {
            type: DataTypes.STRING(2),
            field: 'NSEProductType'
        },
        equityPercent: {
            type: DataTypes.DECIMAL(15,4),
            field: 'equityPercent'
        },
        debtPercent: {
            type: DataTypes.DECIMAL(15,4),
            field: 'debtPercent'
        },
        goldPercent: {
            type: DataTypes.DECIMAL(15,2),
            field: 'goldPercent'
        },
        otherPercent: {
            type: DataTypes.DECIMAL(15,2),
            field: 'otherPercent'
        },
        openDate: {
            type: DataTypes.DATE,
            field: 'openDate'
        },
        closeDate: {
            type: DataTypes.DATE,
            field: 'closeDate'
        },
        shortName: {
            type: DataTypes.STRING(100),
            field: 'shortName'
        },
        mfTally: {
            type: DataTypes.STRING(1),
            field: 'mfTally'
        },
        fsCode: {
            type: DataTypes.STRING(10),
            field: 'fsCode'
        },
        reinvestSameDay: {
            type: DataTypes.INTEGER(1),
            field: 'reinvestSameDay'
        },
        schemeGroupId: {
            type: DataTypes.STRING(20),
            field: 'schemeGroupId'
        },
        benchmarkScheme: {
            type: DataTypes.STRING(11),
            field: 'benchmarkScheme'
        },
        closeEnded: {
            type: DataTypes.CHAR(1),
            field: 'closeEnded'
        },
        matDate: {
            type: DataTypes.DATE,
            field: 'matDate'
        },
        taxStat: {
            type: DataTypes.STRING(1),
            field: 'taxStat'
        },
        weekHigh: {
            type: DataTypes.STRING(50),
            field: 'weekHigh'
        },
        weekLow: {
            type: DataTypes.STRING(50),
            field: 'weekLow'
        },
        schBroadBenchmark: {
            type: DataTypes.INTEGER(11),
            field: 'schBroadBenchmark'
        },
        risk: {
            type: DataTypes.CHAR(1),
            field: 'risk'
        },
        AUMReportCategory: {
            type: DataTypes.STRING(255),
            field: 'AUMReportCategory'
        },
        frequencies: {
            type: DataTypes.STRING(100),
            field: 'frequencies'
        },
        frequencyCodes: {
            type: DataTypes.STRING(50),
            field: 'frequencyCodes'
        },
        sipDates: {
            type: DataTypes.STRING(100),
            field: 'sipDates'
        },
        swpDates: {
            type: DataTypes.STRING(100),
            field: 'swpDates'
        },
        schemeCategory: {
            type: DataTypes.STRING(255),
            field: 'schemeCategory'
        },
        schemeSubCategory: {
            type: DataTypes.STRING(255),
            field: 'schemeSubCategory'
        },
        nseInvestmentType: {
            type: DataTypes.STRING(1),
            field: 'nseInvestmentType'
        },
        dividendFrequency: {
            type: DataTypes.STRING(100),
            field: 'dividendFrequency'
        },
        status: {
            type: DataTypes.STRING(100),
            field: 'status'
        },
        purchaseAllowed: {
            type: DataTypes.STRING(1),
            field: 'purchaseAllowed'
        },
        switchAllowed: {
            type: DataTypes.STRING(1),
            field: 'switchAllowed'
        },
        redemptionAllowed: {
            type: DataTypes.STRING(1),
            field: 'redemptionAllowed'
        },
        sipAllowed: {
            type: DataTypes.STRING(1),
            field: 'sipAllowed'
        },
        stpAllowed: {
            type: DataTypes.STRING(1),
            field: 'stpAllowed'
        },
        swpAllowed: {
            type: DataTypes.STRING(1),
            field: 'swpAllowed'
        },
        minAmount: {
            type: DataTypes.DECIMAL(30,4),
            field: 'minAmount'
        },
        maxAmount: {
            type: DataTypes.DECIMAL(30,4),
            field: 'maxAmount'
        },
        investmentType: {
            type: DataTypes.STRING(1),
            field: 'investmentType'
        },
        weekHighDate: {
            type: DataTypes.DATE,
            field: 'weekHighDate'
        },
        weekLowDate: {
            type: DataTypes.DATE,
            field: 'weekLowDate'
        },
        NSEInsuranceMode: {
            type: DataTypes.CHAR(1),
            field: 'NSEInsuranceMode'
        },
        BSEInsuranceMode: {
            type: DataTypes.CHAR(1),
            field: 'BSEInsuranceMode'
        },
        changeDate: {
            type: DataTypes.DATE,
            field: 'changeDate'
        },
        changePercent: {
            type: DataTypes.DECIMAL(12,6),
            field: 'changePercent'
        },
        redemptionAllowedBSE: {
            type: DataTypes.CHAR(1),
            field: 'redemptionAllowedBSE'
        },
        BSEInsuranceCode: {
            type: DataTypes.STRING(25),
            field: 'BSEInsuranceCode'
        },
        purchaseAllowedBSE: {
            type: DataTypes.CHAR(1),
            field: 'purchaseAllowedBSE'
        },
        switchAllowedBSE: {
            type: DataTypes.CHAR(1),
            field: 'switchAllowedBSE'
        },
        sipAllowedBSE: {
            type: DataTypes.CHAR(1),
            field: 'sipAllowed'
        },
        stpAllowedBSE: {
            type: DataTypes.CHAR(1),
            field: 'stpAllowedBSE'
        },
        swpAllowedBSE: {
            type: DataTypes.CHAR(1),
            field: 'swpAllowedBSE'
        },
        nfoCloseDate: {
            type: DataTypes.DATE,
            field: 'nfoCloseDate'
        },
        mfuCode: {
            type: DataTypes.STRING(25),
            field: 'mfuCode'
        },
        mfuInvestmentType: {
            type: DataTypes.CHAR(1),
            field: 'mfuInvestmentType'
        },
        purchaseMinAmount: {
            type: DataTypes.DECIMAL(30,2),
            field: 'purchaseMinAmount'
        },
        sipMinAmount: {
            type: DataTypes.DECIMAL(30,2),
            field: 'sipMinAmount'
        },
        redemptionMinAmount: {
            type: DataTypes.DECIMAL(30,2),
            field: 'redemptionMinAmount'
        },
        switchMinAmount: {
            type: DataTypes.DECIMAL(30,2),
            field: 'switchMinAmount'
        },
        swpMinAmount: {
            type: DataTypes.DECIMAL(30,2),
            field: 'swpMinAmount'
        },
        purchaseMaxAmount: {
            type: DataTypes.DECIMAL(30,2),
            field: 'purchaseMaxAmount'
        },
        sipMaxAmount: {
            type: DataTypes.DECIMAL(30,2),
            field: 'sipMaxAmount'
        },
        redemptionMaxAmount: {
            type: DataTypes.DECIMAL(30,2),
            field: 'redemptionMaxAmount'
        },
        switchMaxAmount: {
            type: DataTypes.DECIMAL(30,2),
            field: 'switchMaxAmount'
        },
        swpMaxAmount: {
            type: DataTypes.DECIMAL(30,2),
            field: 'switchMaxAmount'
        },
        purchaseAllowedMFU: {
            type: DataTypes.STRING(1),
            field: 'purchaseAllowedMFU'
        },
        redemptionAllowedMFU: {
            type: DataTypes.STRING(1),
            field: 'redemptionAllowedMFU'
        },
        sipAllowedMFU: {
            type: DataTypes.STRING(1),
            field: 'sipAllowedMFU'
        },
        swpAllowedMFU: {
            type: DataTypes.STRING(1),
            field: 'swpAllowedMFU'
        },
        stpInAllowedMFU: {
            type: DataTypes.STRING(1),
            field: 'stpInAllowedMFU'
        },
        stpOutAllowedMFU: {
            type: DataTypes.STRING(1),
            field: 'stpOutAllowedMFU'
        },
        switchInAllowedMFU: {
            type: DataTypes.STRING(1),
            field: 'switchInAllowedMFU'
        },
        switchOutAllowedMFU: {
            type: DataTypes.STRING(1),
            field: 'switchOutAllowedMFU'
        },
        taxSaving: {
            type: DataTypes.INTEGER(1),
            field: 'taxSaving'
        },
        sipDatesBSE: {
            type: DataTypes.STRING(100),
            field: 'sipDatesBSE'
        },
        sipMinAmountBSE: {
            type: DataTypes.DECIMAL(30,4),
            field: 'sipMinAmountBSE'
        },
        sipMaxAmountBSE: {
            type: DataTypes.DECIMAL(30,4),
            field: 'sipMaxAmountBSE'
        },
        stpDatesBSE: {
            type: DataTypes.STRING(100),
            field: 'stpDatesBSE'
        },
        stpMinAmountBSE: {
            type: DataTypes.DECIMAL(30,4),
            field: 'stpMinAmountBSE'
        },
        stpMaxAmountBSE: {
            type: DataTypes.DECIMAL(30,4),
            field: 'stpMaxAmountBSE'
        },
        tenure: {
            type: DataTypes.STRING(25),
            field: 'tenure'
        }
    },{
        tableName: 'schemedetails'
    })
}