const db = require('../models')
const category = () => {
    const result = await db.objectives.findAll({
        attributes: ['objectiveid', 'objectiveName']
    })
    return result
}

module.exports = {
    category
}


