import athonDB from "../../config"

const insertVictim = (victimName) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`insert into victim (tx_name) values (?)`, [ victimName ], (error, result) => {
      if(error){
        return reject(error)
      }

      resolve(result.insertId)
    })
  }).catch(error => { throw error })
}

export default insertVictim