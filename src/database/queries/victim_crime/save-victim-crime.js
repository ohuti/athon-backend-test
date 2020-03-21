import athonDB from "../../config"

const saveVictimCrime = (victimId, crimeId) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`insert into victim_crime (id_victim, id_crime) values (?, ?)`, [ victimId, crimeId ], (error, result) => {
      if(error){
        return reject(error)
      }

      resolve(result.insertId)
    })
  }).catch(error => { throw error })
}

export default saveVictimCrime