import athonDB from "../../config"

const findVictimIdByName = (victimName) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`select id_victim from victim where tx_name = ?`, [victimName], (error, result) => {
      if(error){
        return reject(error)
      }
      if(!result.length){
        resolve(null)
      }
      resolve(result[0].id_victim)
    })
  }).catch(error => { throw error })
}

export default findVictimIdByName