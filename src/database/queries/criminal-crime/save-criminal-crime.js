import athonDB from "../../config"

const saveCriminalCrime = (criminalId, crimeId) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`insert into criminal_crime (id_criminal, id_crime) values (?, ?)`, [ criminalId, crimeId ], (error, result) => {
      if (error) {
        return reject(error)
      }

      return resolve(result.insertId)
    })
  }).catch(error => { throw error })
}

export default saveCriminalCrime