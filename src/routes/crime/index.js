import express from 'express'

import { addCrimeSchema, getCrimeSchema, deleteCrimeSchema, getCrimesSchema } from './joi-schema'

import validate from '../../utils/joi-validate'
import controllerHandler from '../../utils/controller-handler'

import executeGetCrime from '../../controllers/get-crime'
import executeAddCrime from '../../controllers/add-crime'
import executeDeleteCrime from '../../controllers/delete-crime'
import executeGetCrimes from '../../controllers/get-crimes'

const crimeRouter = express.Router()

crimeRouter.get('/:id', validate(getCrimeSchema), controllerHandler(executeGetCrime))
crimeRouter.get('/', validate(getCrimesSchema), controllerHandler(executeGetCrimes))

crimeRouter.post('/', validate(addCrimeSchema), controllerHandler(executeAddCrime))

crimeRouter.delete('/', validate(deleteCrimeSchema), controllerHandler(executeDeleteCrime))

export default crimeRouter