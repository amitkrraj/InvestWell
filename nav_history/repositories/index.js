const db = require('../models')
const getCategory = async (attributes) => {
    // const result = await db.objectives.findAll({
    //     attributes: [attributes],
    //     group: [attributes]
    // })

    const result = await db.sequelize.query('SELECT AUMObjective FROM objectives AS objectives GROUP BY AUMObjective')
    return result
}

module.exports = {
    getCategory
}