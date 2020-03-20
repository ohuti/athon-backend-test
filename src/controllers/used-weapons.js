import getWeapons from "../database/queries/used-weapons"

const execute = (request, response) => {
  try {
    getWeapons((error, results) => {
      if(error){
        throw error
      }
      
      console.log(results)
      const weapons = results.map(result => {
        return { weapon: result.weapon, weapon_type: result.weapon_type }
      })
  
      return response.status(200).json({
        status: 200,
        response: 'OK',
        weapons
      })
    })
  } catch (error) {
  }
}

export default execute