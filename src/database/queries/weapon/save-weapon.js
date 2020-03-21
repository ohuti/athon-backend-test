import athonDB from "../../config"

const saveWeapon = (weaponName, weaponTypeId) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`insert into weapon (tx_model, id_weapon_type) values (?, ?)`, [ weaponName, weaponTypeId ], (error, result) => {
      if(error){
        return reject(error)
      }

      return resolve(result.insertId)
    })
  }).catch(error => { throw error })
}

export default saveWeapon