const db = require('../models')

const getFunds = async (attributes) => {
    return await db.funds.findAll({
        attributes: attributes
    })
}

const getCategory = async (attributes) => {
    return await db.objectives.findAll({
        attributes: [['AUMObjective', 'Category']],
        group: attributes
    })
}

const getSchemeDetails = async (attributes) => {
    return await db.sequelize.query(
        `select name as 'Scheme Name', corpus as 'Corpus (Cr.)', 6Month as '6 Month', 1Year as '1 Year', 2Year as '2 Year', 3Year as '3 Year', 5Year as '5 Year', 10Year as '10 Year' from schemes INNER JOIN factsheets ON schemes.fsid = factsheets.fsid INNER JOIN schemereturns ON schemes.schid = schemereturns.schid where schemes.schid = ${attributes.schid} and schemes.fsid = ${attributes.fsid}`,
        {
            type: db.Sequelize.QueryTypes.SELECT
        }
    )
}

const getDateAndNav = async attributes => {
    return await db.sequelize.query(
        `select navDate as Date, nav as NAV from navhistory INNER JOIN schemes ON navhistory.schid = schemes.schid where schemes.schid = ${attributes.schid} and navDate between '${attributes.fromDate}' and '${attributes.toDate}'`,
        {
            type: db.Sequelize.QueryTypes.SELECT
        }
    )
}

module.exports = {
    getFunds,
    getCategory,
    getDateAndNav,
    getSchemeDetails
}