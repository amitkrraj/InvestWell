module.exports = function (sequelize, DataTypes) {
    return sequelize.define('funds', {
        fundid:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        product: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        iwellCode: {
            type: DataTypes.STRING(15),
            allowNull: true, unique: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        nseAMCCode: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        AMCCode: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        gstin: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        mfuAMCCode: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        fundsNetKey: {
            type: DataTypes.STRING(5),
            allowNull: true
        },
        billingName: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        pan: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        sac: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        cin: {
            type: DataTypes.STRING(21),
            allowNull: true
        },
        address1: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        address2: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        address3: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        city: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        stateCode: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        pin: {
            type: DataTypes.STRING(8),
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        state: {
            type: DataTypes.STRING(25),
            allowNull: true
        }

    },{
        tableName: 'funds',
        timestamps: true
    })
}