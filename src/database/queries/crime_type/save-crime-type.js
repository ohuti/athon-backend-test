import athonDB from "../../config"

const saveCrimeType = (crimeType) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`insert into crime_type (tx_type) values (?)`, [ crimeType ], (error, result) => {
      if(error){
        return reject(error)
      }
      
      return resolve(result.insertId)
    })
  }).catch(error => { throw error })
}

export default saveCrimeType