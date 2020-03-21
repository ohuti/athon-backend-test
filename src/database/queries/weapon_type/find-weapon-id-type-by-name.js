import athonDB from "../../config"

const findWeaponTypeIdByName = (weaponType) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`select id_weapon_type from weapon_type where tx_weapon_type = ?`, [ weaponType ], (error, result) => {
      if(error){
        return reject(error)
      }
      if(!result.length){
        resolve(null)
      }

      resolve(result[0].id_weapon_type)
    })
  }).catch(error => { throw error })
}

export default findWeaponTypeIdByName