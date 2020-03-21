import athonDB from "../../config"

const insertVictim = (victimName) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`insert into victim (tx_name) values (?)`, [ victimName ], error => {
      if(error){
        return reject(error)
      }
    })

    athonDB.query(`select * from victim order by id_victim desc`, (error, results) => {
      if(error){
        return reject(error)
      }

      const lastInsertedVictim = results[0]
      resolve(lastInsertedVictim)
    })
  }).catch(error => { throw error })
}

export default insertVictim