import express from 'express'

import weaponRouter from './weapon'
import crimeRouter from './crime'
import { notFoundHandler, databaseRuntimeError, exceptionHandler } from './error-handlers'

const mainRouter = express.Router()

mainRouter.get('/', (request, response) => response.status(200).json({ status: 'OK' }))

mainRouter.use('/weapon', weaponRouter)
mainRouter.use('/crime', crimeRouter)

mainRouter.use(notFoundHandler)
mainRouter.use(databaseRuntimeError)
mainRouter.use(exceptionHandler)

export default mainRouter