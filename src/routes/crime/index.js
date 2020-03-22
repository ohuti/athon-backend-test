import express from 'express'

import { addCrimeSchema, getCrimeSchema, deleteCrimeSchema } from './joi-schema'

import validate from '../../utils/joi-validate'
import controllerHandler from '../../utils/controller-handler'

import executeGetCrime from '../../controllers/get-crime'
import executeAddCrime from '../../controllers/add-crime'
import deleteCrime from '../../controllers/delete-crime-and-references'

const crimeRouter = express.Router()

crimeRouter.get('/:id', validate(getCrimeSchema), controllerHandler(executeGetCrime))

crimeRouter.post('/', validate(addCrimeSchema), controllerHandler(executeAddCrime))

crimeRouter.delete('/', validate(deleteCrimeSchema), controllerHandler(deleteCrime))

export default crimeRouter