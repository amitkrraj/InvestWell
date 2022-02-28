const marketDataRepo = require('../repositories')

const getAmcName = async () => {
    const attributes = ['fundid', 'name']
    return await marketDataRepo.getAmcName(attributes)
}

const getCategory = async () => {
    const attributes = ['AUMObjective']
    return await marketDataRepo.getCategory(attributes)
}

const getschemesDetails = async () => {
    const data = await marketDataRepo.getschemesDetails()
    return data
}

module.exports = {
    getAmcName,
    getCategory,
    getschemesDetails
}