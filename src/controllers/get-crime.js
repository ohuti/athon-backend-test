import getCrime from "../database/queries/get-crime"

const execute = async (request, response) => {
  const crimeId = request.params.id

  const crime = await getCrime(crimeId)  
  if(!crime) {
    throw { status: 404, response: 'crime_not_found', message: `crime ${crimeId} not found in database` }
  }
    
  return response.status(200).json({
    status: 200,
    response: 'OK',
    crime: crime
  })
}

export default execute