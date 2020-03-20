import express from 'express'

import { addCrimeSchema, getCrimeSchema } from './joi-schema'

import validate from '../../utils/joi-validate'
import controllerHandler from '../../utils/controller-handler'

import executeGetCrime from '../../controllers/get-crime'

const crimeRouter = express.Router()

crimeRouter.get('/:id', validate(getCrimeSchema), controllerHandler(executeGetCrime))

crimeRouter.post('/', validate(addCrimeSchema), controllerHandler((request, response) => {
  return response.status(201).json({ status: 201, response: 'created', crime: request.body })
}))

export default crimeRouter