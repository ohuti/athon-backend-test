import athonDB from "../../config"

const selectVictimByName = (victimName) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`select * from victim where tx_name = ?`, [victimName], (error, result) => {
      if(error){
        return reject(error)
      }
      if(!result.length){
        resolve(null)
      }

      resolve(result[0])
    })
  }).catch(error => { throw error })
}

export default selectVictimByName