const marketDataRepo = require('../repositories')

const getFunds = async () => {
  const attributes = ['fundid', 'name']
  return await marketDataRepo.getFunds(attributes)
}

const getCategory = async () => {
  const attributes = [['AUMObjective', 'Category']]
  return await marketDataRepo.getCategory(attributes)
}

const getScheme = async (options) => {
  return await marketDataRepo.getScheme(options)
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
  getCategory,
  getScheme,
  getDateAndNav,
  getBenchmark,
  getSchemeDetails
}