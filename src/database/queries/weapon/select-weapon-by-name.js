import athonDB from "../../config"

const selectWeaponByName = (weaponName) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`select * from weapon where tx_model = ?`, [ weaponName ], (error, result) => {
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

export default selectWeaponByName