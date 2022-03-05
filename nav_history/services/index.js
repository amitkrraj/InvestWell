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

const getBenchmark = async (options) => {
  return await marketDataRepo.getBenchmark(options)
}

const getDateAndNav = async (options) => {
  return await marketDataRepo.getDateAndNav(options)
}

const getDateAndNavBenchmark = async (options) => {
  return await marketDataRepo.getDateAndNavBenchmark(options)
}

const getSchemeDetails = async (options) => {
  return await marketDataRepo.getSchemeDetails(options)
}

module.exports = {
  getFunds,
  getCategory,
  getScheme,
  getBenchmark,
  getDateAndNav,
  getDateAndNavBenchmark,
  getSchemeDetails
}