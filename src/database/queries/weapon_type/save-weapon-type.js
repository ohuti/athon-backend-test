import athonDB from "../../config"

const saveWeaponType = (weaponType) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`insert into weapon_type (tx_weapon_type) values (?)`, [ weaponType ], (error, result) => {
      if(error){
        return reject(error)
      }

      resolve(result.insertId)
    })
  }).catch(error => { throw error })
}

export default saveWeaponType