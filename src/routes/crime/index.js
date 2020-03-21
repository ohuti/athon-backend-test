import express from 'express'

import { addCrimeSchema, getCrimeSchema } from './joi-schema'

import validate from '../../utils/joi-validate'
import controllerHandler from '../../utils/controller-handler'

import executeGetCrime from '../../controllers/get-crime'
import executeAddCrime from '../../controllers/add-crime'

const crimeRouter = express.Router()

crimeRouter.get('/:id', validate(getCrimeSchema), controllerHandler(executeGetCrime))

crimeRouter.post('/', validate(addCrimeSchema), controllerHandler(executeAddCrime))

export default crimeRouter