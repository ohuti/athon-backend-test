import athonDB from "../../config"

import { generateMySqlDate } from '../../../utils/format-mysql-date' 

const saveCrime = (country) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`insert into crime (tx_country, dt_crime) values (?, ?)`, [ country, generateMySqlDate() ], (error, result) => {
      if(error){
        return reject(error)
      }

      resolve(result.insertId)
    })
  }).catch(error => { throw error })
}

export default saveCrime