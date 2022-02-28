const marketDataService = require('../services/index')
const { RESPONSE_MSG, STATUS } = require('../constants')

const getFunds = async (req, res) => {
    try {
        const result = await marketDataService.getFunds()
        res.json({
            status: STATUS.SUCCESS,
            message: RESPONSE_MSG.SUCCESS,
            result: result
        })
    }
    catch (exception) {
        res.json({
            status: STATUS.FAILED,
            message: RESPONSE_MSG.FAILED,
            result: {}
        })
    }
}

const getCategory = async (req, res) => {
    try {
        const result = await marketDataService.getCategory()
        res.json({
            status: STATUS.SUCCESS,
            message: RESPONSE_MSG.SUCCESS,
            result: result
        })
    }
    catch (exception) {
        res.json({
            status: STATUS.FAILED,
            message: RESPONSE_MSG.FAILED,
            result: {}
        })
    }
}

const getNavHistory = async (req, res) => {
    try {
        const { schid, fsid } = req.query
        if (!schid || schid < 0 || !fsid || fsid < 0) {
            return res.json({
                status: STATUS.FAILED,
                message: RESPONSE_MSG.FAILED,
                result: {}
            })
        }
        const dateAndNav = await marketDataService.getDateAndNav(req.query)
        const schemeDetails = await marketDataService.getSchemeDetails(req.query)
        res.json({
            status: STATUS.SUCCESS,
            message: RESPONSE_MSG.SUCCESS,
            result: { dateAndNav, schemeDetails }
        })
    }
    catch (exception) {
        res.json({
            status: STATUS.FAILED,
            message: RESPONSE_MSG.FAILED,
            result: {}
        })
    }
}

module.exports = {
    getFunds,
    getCategory,
    getNavHistory
}
