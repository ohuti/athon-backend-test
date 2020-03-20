import { createConnection } from 'mysql'

const { HOST, USER, KEY, DATABASE } = JSON.parse(process.env.MYSQL)

const athonDB = createConnection({
  host: HOST,
  user: USER,
  password: KEY,
  database: DATABASE
})

athonDB.connect(error => {
  if(error) {
    return console.error(error)
  }
  
  console.log('[*] MySQL Connected')
})

export default athonDB