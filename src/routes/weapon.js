import express from 'express'

import controllerHandler from '../utils/controller-handler'
import executeUsedWeapon from '../controllers/used-weapons'

const weaponRouter = express.Router()

weaponRouter.get('/used', controllerHandler(executeUsedWeapon))

export default weaponRouter