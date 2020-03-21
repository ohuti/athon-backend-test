import athonDB from "../../config"

const insertWeaponCrime = (weaponId, crimeId) => {
  return new Promise((reject) => {
    athonDB.query(`insert into weapon_crime (id_weapon, id_crime) values (?, ?)`, [ weaponId, crimeId ], error => {
      if(error){
        return reject(error)
      }
    })
  }).catch(error => { throw error })
}

export default insertWeaponCrime