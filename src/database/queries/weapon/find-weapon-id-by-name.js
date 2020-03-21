import athonDB from "../../config"

const findWeaponIdByName = (weaponName) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`select id_weapon from weapon where tx_model = ?`, [ weaponName ], (error, result) => {
      if(error){
        return reject(error)
      }
      if(!result.length){
        resolve(null)
      }

      resolve(result[0].id_weapon)
    })
  }).catch(error => { throw error })
}

export default findWeaponIdByName