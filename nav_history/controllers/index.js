const marketDataService = require('../services/index')
const { RESPONSE_MSG, STATUS } = require('../constants')
const moment = require('moment')

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


const getScheme = async (req, res) => {
    try {
        const { fundid, category } = req.query
        if (fundid <= 0 || parseInt(fundid) == NaN || typeof category != "string"){
            return res.json({
                status: STATUS.FAILED,
                message: RESPONSE_MSG.FAILED,
                result: {}
            })
        }
        const result = await marketDataService.getScheme(req.query)
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

const isValidDate = (date) => {
    return (moment(date, 'YYYY-MM-DD', true).isValid() || moment(date, 'YYYY-M-DD', true).isValid() ||
        moment(date, 'YYYY-MM-D', true).isValid())
}

const getNavHistory = async (req, res) => {
    try {
        const { schid, fsid, fromDate, toDate, today } = req.query
        if (parseInt(schid) == NaN || schid <= 0 || parseInt(fsid) == NaN || fsid <= 0 ||
        !isValidDate(fromDate) || !isValidDate(toDate) || fromDate > today || toDate > today) {
            return res.json({
                status: STATUS.FAILED,
                message: RESPONSE_MSG.FAILED,
                result: {}
            })
        }
        const dateAndNav = await marketDataService.getDateAndNav(req.query)
        const scheme = await marketDataService.getDateAndNav(req.query)
        const benchmark = await marketDataService.getBenchmark(req.query)
        const schemeDetails = await marketDataService.getSchemeDetails(req.query)
        res.json({
            status: STATUS.SUCCESS,
            message: RESPONSE_MSG.SUCCESS,
            result: {
                dateAndNav: dateAndNav,
                graph: {scheme, benchmark},
                schemeDetails: schemeDetails}
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
    getScheme,
    getNavHistory
}