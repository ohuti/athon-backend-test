import athonDB from "../../config"

const saveWeaponCrime = (weaponId, crimeId) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`insert into weapon_crime (id_weapon, id_crime) values (?, ?)`, [ weaponId, crimeId ], (error, result) => {
      if(error){
        return reject(error)
      }

      resolve(result.insertId)
    })
  }).catch(error => { throw error })
}

export default saveWeaponCrime