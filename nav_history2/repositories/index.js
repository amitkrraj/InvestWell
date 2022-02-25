const db = require('../models/index')
const getFund = async (attributes) => {
    const result = await db.funds.findAll({
        attributes: [attributes]
    })
    return result
}

module.exports = {
    getFund
}