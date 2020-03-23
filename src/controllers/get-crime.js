import findCrimeWithDetails from "../database/queries/crime/find-crime-with-details"

const executeGetCrime = async (request, response) => {
  const crimeId = request.params.id
  const queryFilter = `where c.id_crime = ${crimeId}`

  const crime = await findCrimeWithDetails(queryFilter)  
  if(!crime) {
    throw { status: 200, response: 'crime_not_found', message: `crime ${crimeId} not found in database` }
  }
    
  return response.status(200).json({
    status: 200,
    response: 'OK',
    crime
  })
}

export default executeGetCrime