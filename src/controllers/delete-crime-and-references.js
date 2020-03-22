import findCrime from "../database/queries/crime/find-crime"
import deleteCrime from "../database/queries/crime/delete-crime"

const deleteCrimeAndReferences = async (request, response) => {
  const { country, date } = request.query
  const reference = country ?
    `tx_country = '${country}'` :
    `dt_crime between '${date} 00:00:00' and '${date} 23:59:59'`
  
  const crimeIds = await findCrime(reference)
  crimeIds.forEach(async crimeId => await deleteCrime(crimeId))

  return response.status(200).json({ status: 200, response: 'OK' })
}

export default deleteCrimeAndReferences