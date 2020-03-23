import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './database/config'

import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import mainRouter from './routes'

const onStart = () => {
  console.info(`[*] API ${process.env.API_VERSION} RUNNING ON PORT ${process.env.PORT} IN ${process.env.ENVIRONMENT} MODE`)
}

const PORT = process.env.PORT
const app = express()

console.log('SERVER LOGS: [+]')
console.log('DATABASE LOGS: [*]')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/', mainRouter)
app.listen(PORT, onStart())
