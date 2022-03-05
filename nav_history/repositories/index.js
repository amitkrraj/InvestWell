const db = require('../models')

const getFunds = async attributes => {
  return await db.funds.findAll({
    attributes: attributes
  })
}

const getCategory = async attributes => {
  return await db.objectives.findAll({
    attributes: attributes,
    group: 'AUMObjective'
  })
}

const getScheme = async options => {
  return await db.sequelize.query(
    `SELECT schemes.name, schemes.fundid, objectives.AUMObjective FROM schemes 
    JOIN objectives ON schemes.objectiveid = objectives.objectiveid 
    WHERE schemes.fundid = ${options.fundid} AND objectives.AUMObjective = '${options.category}'`,
    {
      type: db.Sequelize.QueryTypes.SELECT
    }
  )
}

const getBenchmark = async attributes =>{
  return await db.sequelize.query(
    `select distinct schBroadBenchmark, schemes.name from schemedetails 
    JOIN schemes on schemedetails.schBroadBenchmark = schemes.schid`,
    {
      type: db.Sequelize.QueryTypes.SELECT
    }
  )
}

const getSchemeDetails = async attributes => {
  return await db.sequelize.query(
    `select name as 'Scheme Name', corpus as 'Corpus (Cr.)', 6Month as '6 Month', 1Year as '1 Year', 
    2Year as '2 Year', 3Year as '3 Year', 5Year as '5 Year', 10Year as '10 Year' from schemes 
    JOIN factsheets ON schemes.fsid = factsheets.fsid 
    JOIN schemereturns ON schemes.schid = schemereturns.schid
    where schemes.schid = ${attributes.schid}`,
    {
      type: db.Sequelize.QueryTypes.SELECT
    }
  )
}

const getDateAndNav = async attributes => {
  return await db.sequelize.query(
    `select navDate as Date, nav as NAV from navhistory
     where navhistory.schid = ${attributes.schid} and navDate 
     between '${attributes.fromDate}' and '${attributes.toDate}'`,
    {
      type: db.Sequelize.QueryTypes.SELECT
    }
  )
}

const getDateAndNavBenchmark = async attributes => {
  return await db.sequelize.query(
    `select navDate as Date, nav as NAV from navhistory 
    JOIN schemedetails on schemedetails.schBroadBenchmark = navhistory.schid 
    where schemedetails.schBroadBenchmark = ${attributes.schBroadBenchmark} and navDate 
    between '${attributes.fromDate}' and '${attributes.toDate}'`,
    {
      type: db.Sequelize.QueryTypes.SELECT
    }
  )
}
//where schemedetails.schid = ${attributes.schid} and navDate 
module.exports = {
  getFunds,
  getCategory,
  getScheme,
  getBenchmark,
  getDateAndNav,
  getDateAndNavBenchmark,
  getSchemeDetails
}