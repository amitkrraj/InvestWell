const db = require('../models')

const getAmcName = async attributes => {
    const result = await db.funds.findAll({
        attributes: attributes,
    })
    return result
}

const getCategory = async attributes => {
    const result = await db.objectives.findAll({
        attributes: [['AUMObjective', 'category']],
        group: attributes
    })
    return result
}

const getschemesDetails = async attributes => {
    const result = await db.sequelize.query(
        `select name, corpus, 6Month, 1Year, 2Year, 3Year, 5Year, 10Year from schemes INNER JOIN factsheets ON schemes.fsid = factsheets.fsid INNER JOIN schemereturns ON schemes.schid = schemereturns.schid where schemes.schid = ? and schemes.fsid = ?`,
        {
            replacements: [attributes.schid, attributes.fsid],
            type: db.Sequelize.QueryTypes.SELECT
        }
    )
    return result
}

module.exports = {
    getAmcName,
    getCategory,
    getschemesDetails
}