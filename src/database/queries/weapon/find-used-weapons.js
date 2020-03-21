import athonDB from '../../config'

const findUsedWeapons = async () => {
  return new Promise((resolve, reject) => {
    athonDB.query(`select
        distinct(w.id_weapon),
        w.tx_model as weapon,
        wt.tx_weapon_type as weapon_type
      from weapon_crime wc
      inner join weapon w on wc.id_weapon = w.id_weapon
      inner join weapon_type wt on w.id_weapon_type = wt.id_weapon_type`, (error, results) => {
        if (error) {
          return reject(error)
        }
        if(!results.length){
          return resolve(null)
        }
  
        const weapons = results.map(result => {
          return { weapon: result.weapon, weapon_type: result.weapon_type }
        })
        
        return resolve (weapons)
      }
    )
  }).catch(error => { throw error })
}

export default findUsedWeapons