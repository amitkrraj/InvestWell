const marketDataRepo = require('../repositories')

const getFunds = async () => {
    const attributes = ['fundid', 'name']
    return await marketDataRepo.getFunds(attributes)
}

const getCategoryName = async () => {
    const attributes = [['AUMObjective', 'Category']]
    return await marketDataRepo.getCategoryName(attributes)
}

const getSchemeName = async (options) => {
  const data = await marketDataRepo.getSchemeName(options)
  return data
}

const getDateAndNav = async (options) => {
    return await marketDataRepo.getDateAndNav(options)
}

const getBenchmark = async (options) => {
    return await marketDataRepo.getBenchmark(options)
}

const getSchemeDetails = async (options) => {
    return await marketDataRepo.getSchemeDetails(options)
}

module.exports = {
    getFunds,
    getCategoryName,
    getSchemeName,
    getDateAndNav,
    getBenchmark,
    getSchemeDetails
}