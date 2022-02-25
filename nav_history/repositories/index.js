const db = require('../models')
const getCategory = async (attributes) => {
    const result = await db.objectives.findAll({
        attributes: [attributes],
        group: [attributes]
    })
    return result
}

module.exports = {
    getCategory
}