const marketDataRepo = require('../repositories')

const getFunds = async () => {
    const attributes = ['fundid', 'name']
    return await marketDataRepo.getFunds(attributes)
}

const getCategory = async () => {
    const attributes = ['AUMObjective']
    return await marketDataRepo.getCategory(attributes)
}

const getDateAndNav = async (requestOptions) => {
    return await marketDataRepo.getDateAndNav(requestOptions)
}

const getSchemeDetails = async (requestOptions) => {
    return await marketDataRepo.getSchemeDetails(requestOptions)
}

module.exports = {
    getFunds,
    getCategory,
    getDateAndNav,
    getSchemeDetails
}