import athonDB from "../../config"

const findCrimeTypeIdByName = (crimeType) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`select id_crime_type from crime_type where tx_type = ?`, [ crimeType ], (error, result) => {
      if(error){
        return reject(error)
      }
      if(!result.length){
        return resolve(null)
      }

      return resolve(result[0].id_crime_type)
    })
  }).catch(error => { throw error })
}

export default findCrimeTypeIdByName