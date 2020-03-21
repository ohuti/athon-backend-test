import joi from 'joi'

export const addCrimeSchema = joi.object({
  params: joi.object({ }).required(),
  query: joi.object({ }).required(),
  body: joi.object({
    victims: joi.array().items(joi.string().max(45)).required().error(() => `Victim's name is required and must contain less than 45 characters.`),
    weapons: joi.array().items(
      { 
        weapon: joi.string().max(45).error(() => `Weapon's name is required and must contain less than 45 characters.`),
        weapon_type: joi.string().max(45).error(() => `Weapon's type is required and must contain less than 45 characters.`)
      }
    ).required(),
    criminals: joi.array().items(joi.string().max(45)).required().error(() => `Criminal's name is required and must contain less than 45 characters.`),
    crime_type: joi.array().items(joi.string().max(45)).required().error(() => `Crime's type is required and must contain less than 45 characters.`),
    country: joi.string().max(45).required().error(() => `Country's name is required and must contain less than 45 characters.`)
  }).required()
})

export const getCrimeSchema = joi.object({
  params: joi.object({
    id: joi.number().required().error(() => 'Crime id is required and it is a numeric.')
  }).required(),
  query: joi.object({ }).required(),
  body: joi.object({ }).required()
})