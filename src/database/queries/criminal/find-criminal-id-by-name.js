import athonDB from "../../config"

const findCriminalIdByName = (criminalName) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`select id_criminal from criminal where tx_name = ?`, [ criminalName ], (error, result) => {
      if (error) {
        return reject(error)
      }

      if(!result.length){
        return resolve(null)
      }

      return resolve(result[0].id_criminal)
    })
  }).catch(error => { throw error })
}

export default findCriminalIdByName