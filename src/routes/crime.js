import express from 'express'

import controllerHandler from '../utils/controller-handler'
import execute from '../controllers/get-crime'

const crimeRouter = express.Router()

crimeRouter.get('/:id', controllerHandler(execute))

crimeRouter.post('/', controllerHandler((request, response) => {
  console.log(request.body)
  return response.status(201).json({ status: 201, response: 'created', crime: request.body })
}))

export default crimeRouter