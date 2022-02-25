const marketDataRepo = require('../repositories')

const getFund = async () => {
    const attributes = 'name'
    const data = await marketDataRepo.getFund(attributes)
    return data
}

module.exports = {
    getFund
}