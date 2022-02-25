const marketDataService = require('../services/index')
const { RESPONSE_MSG, STATUS } = require('../constants')

const getFund = async (req, res) => {
    try {
        const result = await marketDataService.getFund()
        res.json({
            status: STATUS.SUCCESS,
            message: RESPONSE_MSG.SUCCESS,
            result: result
        })
    } catch (exception) {
        res.json({
            status: STATUS.FAILED,
            message: RESPONSE_MSG.FAILED,
            result: {}
        })
    }
}

module.exports = {
    getFund
}