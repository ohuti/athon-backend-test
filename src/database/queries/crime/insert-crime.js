import athonDB from "../../config"

import { generateMySqlDate } from '../../../utils/format-mysql-date' 

const insertCrime = (country) => {
  return new Promise((resolve, reject) => {
    athonDB.query(`insert into crime (tx_country, dt_crime) values (?, ?)`, [ country, generateMySqlDate() ], error => {
      if(error){
        return reject(error)
      }

    })

    athonDB.query(`select * from crime order by id_crime desc`, (error, results) => {
      if(error){
        return reject(error)
      }
      const lastInsertedCrime = results[0]

      resolve(lastInsertedCrime)
    })
  }).catch(error => { throw error })
}

export default insertCrime