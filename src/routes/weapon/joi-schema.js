import joi from 'joi'

export const getUsedWeaponsSchema = joi.object({
  params: joi.object({ }).required(),
  query: joi.object({ }).required(),
  body: joi.object({ }).required()
})