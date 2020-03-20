import getWeapons from "../database/queries/used-weapons"

const execute = async (request, response) => {
  try {
    const weapons = await getWeapons()
  
    return response.status(200).json({
      status: 200,
      response: 'OK',
      weapons
    })
  } catch (error) {
    throw error
  }
}

export default execute