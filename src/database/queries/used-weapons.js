import athonDB from '../config'

const getWeapons = (callback) => {
  athonDB.query(`select
      distinct(w.id_weapon), w.tx_model as weapon, wt.tx_weapon_type as weapon_type
    from weapon_crime wc
    inner join weapon w on wc.id_weapon = w.id_weapon
    inner join weapon_type wt on w.id_weapon_type = wt.id_weapon_type`, (error, result) => {
      if (error) {
        return callback(error, null)
      }

      return callback(null, result)
    }
  )
}

export default getWeapons