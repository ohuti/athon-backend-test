import selectCrime from "../database/queries/select-crime"

const executeGetCrime = async (request, response) => {
  const crimeId = request.params.id

  const crime = await selectCrime(crimeId)  
  if(!crime) {
    throw { status: 404, response: 'crime_not_found', message: `crime ${crimeId} not found in database` }
  }
    
  return response.status(200).json({
    status: 200,
    response: 'OK',
    crime
  })
}

export default executeGetCrime