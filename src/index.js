import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './database/config'

import express from 'express'

import mainRouter from './routes'

const PORT = process.env.PORT
const app = express()

console.log('SERVER LOGS: [+]')
console.log('DATABASE LOGS: [*]')

app.use('/', mainRouter)
app.listen(PORT, () => console.log(`[+] App running on PORT ${PORT}`))
