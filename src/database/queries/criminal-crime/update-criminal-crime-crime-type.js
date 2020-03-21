import athonDB from "../../config"

const updateCriminalCrimeCrimeType = (crimeId, crimeTypeId) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`update criminal_crime set id_crime_type = ? where id_crime = ?`, [ crimeTypeId, crimeId ], (error, result) => {
      if(error){
        return reject(error)
      }

      return resolve()
    })
  }).catch(error => { throw error })
}

export default updateCriminalCrimeCrimeType