import findCrimeWithDetails from "../database/queries/crime/find-crime-with-details"
import { formatMySqlDate } from "../utils/format-mysql-date"

const formatArrayToSql = (unfromattedArray) => {
  return unfromattedArray?.length ? unfromattedArray.map((item, index) => {
    if(unfromattedArray.length === index + 1){
      return `'${item}'`
    } else {
      return `'${item}', `
    }
  }) : null
}

const constructQuery = (requestQuery) => {
  const { start_date, end_date, weapons, criminals } = requestQuery

  const formattedWeapons = formatArrayToSql(weapons)
  const formattedCriminals = formatArrayToSql(criminals)

  const dateRangeQuery = start_date && end_date ? `c.dt_crime between '${formatMySqlDate(new Date(start_date))}' and '${formatMySqlDate(new Date(end_date))}'` : null
  const weaponsQuery = formattedWeapons ? `w.tx_model in (`.concat(...formattedWeapons).concat(')') : null
  const criminalsQuery = formattedCriminals ? `cm.tx_name in (`.concat(...formattedCriminals).concat(')') : null

  const queryFilters = []
  if(dateRangeQuery) {
    queryFilters.push(dateRangeQuery)
  }
  if(weaponsQuery) {
    queryFilters.push(weaponsQuery)
  }
  if(criminalsQuery) {
    queryFilters.push(criminalsQuery)
  }

  return queryFilters.map((queryFilter, index) => {
    if(index === 0){
      return `where ${queryFilter}`
    } else {
      return `and ${queryFilter}`
    }
  }).join(' ')
}

const executeGetCrimes = async (request, response) => {
  const queryFilter = constructQuery(request.query)

  const crimesWithIncompleteInfo = await findCrimeWithDetails(queryFilter)
  if(!crimesWithIncompleteInfo) {
    throw { status: 200, response: 'crime(s)_not_found', message: `crimes not found in database with desired filters` }
  }

  const idsQueryFilter = `where c.id_crime in (${ crimesWithIncompleteInfo.map(crime => crime.crimeId).join(', ') })`
  const crimes = await findCrimeWithDetails(idsQueryFilter)
  if(!crimes) {
    throw { status: 200, response: 'crime(s)_not_found', message: `crimes not found in database with desired filters` }
  }

  return response
    .status(200)
    .json({
      status: response.statusCode,
      response: 'OK',
      crime: crimes
    })
}

export default executeGetCrimes