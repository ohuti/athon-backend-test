import athonDB from "../../config"

const saveCriminal = (criminalName) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`insert into criminal (tx_name) values (?)`, [ criminalName ], (error, result) => {
      if(error){
        return reject(error)
      }

      return resolve(result.insertId)
    })
  }).catch(error => { throw error })
}

export default saveCriminal