const marketDataRepo = require('../repositories')

const getFunds = async () => {
    const attributes = ['fundid', 'name']
    return await marketDataRepo.getFunds(attributes)
}

const getCategory = async () => {
    const attributes = ['AUMObjective']
    return await marketDataRepo.getCategory(attributes)
}

const getSchemesDetails = async (requestOptions) => {
    return await marketDataRepo.getSchemesDetails(requestOptions)
}

const getNavHistory = async requestOptions => {
    return await marketDataRepo.getNavHistory(requestOptions)
}

module.exports = {
    getFunds,
    getCategory,
    getSchemesDetails,
    getNavHistory
}