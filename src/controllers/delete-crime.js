import findCrime from "../database/queries/crime/find-crime"
import deleteCrime from "../database/queries/crime/delete-crime"

const executeDeleteCrime = async (request, response) => {
  const { country, date } = request.query
  const reference = country ?
    `tx_country = '${country}'` :
    `dt_crime between '${date} 00:00:00' and '${date} 23:59:59'`
  
  const crimeIds = await findCrime(reference)
  if(!crimeIds) {
    const message = country ? `in ${country}` : `at ${date}`
    throw { status: 404, response: 'crime(s)_not_found', message: `no crime was found ${message} in database, therefore couldn't be deleted.` }
  }
  crimeIds.forEach(async crimeId => await deleteCrime(crimeId))

  return response.status(200).json({ status: 200, response: 'OK', message: `crime(s) ${crimeIds.join(', ')} successfully deleted.` })
}

export default executeDeleteCrime