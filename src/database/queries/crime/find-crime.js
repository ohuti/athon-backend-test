import athonDB from "../../config"

const findCrime = (query) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`select id_crime from crime where ${query}`, (error, results) => {
      if(error){
        return reject(error)
      }
      if(!results.length){
        return resolve(null)
      }

      const crimeIds = results.map(result => result.id_crime)
      return resolve(crimeIds)
    })
  }).catch(error => { throw error })
}

export default findCrime