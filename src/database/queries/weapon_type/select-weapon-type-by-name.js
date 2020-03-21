import athonDB from "../../config"

const selectWeaponTypeByName = (weaponType) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`select * from weapon_type where tx_weapon_type = ?`, [ weaponType ], (error, result) => {
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

export default selectWeaponTypeByName