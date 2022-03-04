module.exports = function (sequelize, DataTypes) {
  return sequelize.define('funds', {
    fundid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'fundid'
    },
    name: {
      type: DataTypes.STRING(150),
      field: 'name'
    },
    product: {
      type: DataTypes.STRING(2),
      field: 'product'
    },
    iwellCode: {
      type: DataTypes.STRING(15),
      unique: true,
      field: 'iwellCode'
    },
    nseAMCCode: {
      type: DataTypes.STRING(25),
      field: 'nseAMCCode'
    },
    AMCCode: {
      type: DataTypes.STRING(25),
      field: 'AMCCode'
    },
    gstin: {
      type: DataTypes.STRING(30),
      field: 'gstin'
    },
    mfuAMCCode: {
      type: DataTypes.STRING(25),
      field: 'mfuAMCCode'
    },
    fundsNetKey: {
      type: DataTypes.STRING(5),
      field: 'fundsNetKey'
    },
    billingName: {
      type: DataTypes.STRING(150),
      field: 'billingName'
    },
    pan: {
      type: DataTypes.STRING(30),
      field: 'pan'
    },
    sac: {
      type: DataTypes.STRING(30),
      field: 'sac'
    },
    cin: {
      type: DataTypes.STRING(21),
      field: 'cin'
    },
    address1: {
      type: DataTypes.STRING(255),
      field: 'address1'
    },
    address2: {
      type: DataTypes.STRING(255),
      field: 'address2'
    },
    address3: {
      type: DataTypes.STRING(255),
      field: 'address3'
    },
    city: {
      type: DataTypes.STRING(25),
      field: 'city'
    },
    stateCode: {
      type: DataTypes.STRING(10),
      field: 'stateCode'
    },
    pin: {
      type: DataTypes.STRING(8),
      field: 'pin'
    },
    phone: {
      type: DataTypes.STRING(20),
      fidl: 'phone'
    },
    email: {
      type: DataTypes.STRING(150),
      field: 'email'
    },
    state: {
      type: DataTypes.STRING(25),
      field: 'state'
    }
  }, {
    tableName: 'funds'
  })
}