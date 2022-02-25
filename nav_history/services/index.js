const { schemesDetails } = require('../repositories/index')
const models = require('../models/objectives')
const queries = require('../repositories/index')

const category = async () => {
    const data = await queries.findcategory()
    return data
}

module.exports = {
    category
}