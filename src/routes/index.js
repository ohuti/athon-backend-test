import express from 'express'

import usedWeaponsRouter from './used-weapons'
import crimeRouter from './crime'

const mainRouter = express.Router()

mainRouter.get('/', (request, response) => response.status(200).json({ status: 'OK' }))

mainRouter.use('/used-weapons', usedWeaponsRouter)
mainRouter.use('/crime', crimeRouter)
mainRouter.use((request, response) => response.status(404).json({ status: 404, response: 'not_found' }))
mainRouter.use((error, request, response, next) => {
  console.error(error)
  response.status(500).json({
    status: 500,
    response: 'internal_server_error',
    error
  })
})

export default mainRouter