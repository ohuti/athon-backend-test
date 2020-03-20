import express from 'express'

import controllerHandler from '../utils/controller-handler'
import execute from '../controllers/crime'

const crimeRouter = express.Router()

crimeRouter.get('/:id', controllerHandler(execute))

export default crimeRouter