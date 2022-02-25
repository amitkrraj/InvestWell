const marketDataRepo = require('../repositories')

const getCategory = async () => {
    const attributes = 'AUMObjective'
    const data = await marketDataRepo.getCategory(attributes)
    return data
}

module.exports = {
    getCategory
}