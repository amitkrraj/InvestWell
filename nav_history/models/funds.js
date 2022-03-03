module.exports = function (sequelize, DataTypes) {
    return sequelize.define('funds', {
        fundid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING(150),
        product: DataTypes.STRING(2),
        iwellCode: {
            type: DataTypes.STRING(15),
            allowNull: true,
            unique: true
        },
        nseAMCCode: DataTypes.STRING(25),
        AMCCode: DataTypes.STRING(25),
        gstin: DataTypes.STRING(30),
        mfuAMCCode: DataTypes.STRING(25),
        fundsNetKey: DataTypes.STRING(5),
        billingName: DataTypes.STRING(150),
        pan: DataTypes.STRING(30),
        sac: DataTypes.STRING(30),
        cin: DataTypes.STRING(21),
        address1: DataTypes.STRING(255),
        address2: DataTypes.STRING(255),
        address3: DataTypes.STRING(255),
        city: DataTypes.STRING(25),
        stateCode: DataTypes.STRING(10),
        pin: DataTypes.STRING(8),
        phone: DataTypes.STRING(20),
        email: DataTypes.STRING(150),
        state: DataTypes.STRING(25)
    }, {
        tableName: 'funds'
    })
}