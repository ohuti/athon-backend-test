import express from 'express'

import controllerHandler from '../utils/controller-handler'
import execute from '../controllers/used-weapons'

const usedWeaponsRouter = express.Router()

usedWeaponsRouter.get('/', controllerHandler(execute))

export default usedWeaponsRouter