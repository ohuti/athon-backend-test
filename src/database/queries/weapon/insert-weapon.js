import athonDB from "../../config"

const insertWeapon = (weaponName, weaponTypeId) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`insert into weapon (tx_model, id_weapon_type) values (?, ?)`, [ weaponName, weaponTypeId ], (error) => {
      if(error){
        return reject(error)
      }
    })

    athonDB.query(`select * from weapon order by id_weapon desc`, (error, results) => {
      if(error){
        return reject(error)
      }
      if(!results.length){
        resolve(null)
      }

      resolve(results[0])
    })
  }).catch(error => { throw error })
}

export default insertWeapon