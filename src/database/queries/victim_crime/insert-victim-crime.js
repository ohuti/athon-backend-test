import athonDB from "../../config"

const insertVictimCrime = (victimId, crimeId) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`insert into victim_crime (id_victim, id_crime) values (?, ?)`, [ victimId, crimeId ], error => {
      if(error){
        return reject(error)
      }
    })
  }).catch(error => { throw error })
}

export default insertVictimCrime