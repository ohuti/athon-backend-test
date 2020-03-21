import athonDB from "../../config"

const insertWeaponType = (weaponType) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`insert into weapon_type (tx_weapon_type) values (?)`, [ weaponType ], (error) => {
      if(error){
        return reject(error)
      }
    })

    athonDB.query(`select * from weapon_type order by id_weapon_type desc`, (error, results) => {
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

export default insertWeaponType