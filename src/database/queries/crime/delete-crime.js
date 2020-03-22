import athonDB from "../../config"

const deleteCrime = (crimeId) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`delete vc, wc, cc from victim_crime vc
      inner join weapon_crime wc on vc.id_crime = wc.id_crime
      inner join criminal_crime cc on vc.id_crime = cc.id_crime
      where vc.id_crime = ?`, [ crimeId ], (error, result) =>{
        if(error){
          return reject(error)
        }

        resolve()
      }
    )

    athonDB.query(`delete from crime where id_crime = ?`, [ crimeId ], (error, result) => {
      if(error){
        return reject(error)
      }

      return resolve()
    })
  }).catch(error => { throw error })
}

export default deleteCrime