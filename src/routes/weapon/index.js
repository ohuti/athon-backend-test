import express from 'express'

import { getUsedWeaponsSchema } from './joi-schema'

import validate from '../../utils/joi-validate'
import controllerHandler from '../../utils/controller-handler'
import executeUsedWeapon from '../../controllers/used-weapons'

const weaponRouter = express.Router()

weaponRouter.get('/used', validate(getUsedWeaponsSchema), controllerHandler(executeUsedWeapon))

export default weaponRouter