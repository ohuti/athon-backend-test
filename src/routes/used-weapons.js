import express from 'express'

import execute from '../controllers/used-weapons'

const usedWeaponsRouter = express.Router()

usedWeaponsRouter.get('/', (request, response) => {
  execute(request, response)
})

export default usedWeaponsRouter