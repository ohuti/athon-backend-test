import selectCrime from '../database/queries/crime/select-crime'
import insertCrime from "../database/queries/crime/insert-crime"

import selectVictimByName from "../database/queries/victim/select-victim-by-name"
import insertVictimCrime from "../database/queries/victim_crime/insert-victim-crime"
import insertVictim from "../database/queries/victim/insert-victim"

import selectWeaponTypeByName from "../database/queries/weapon_type/select-weapon-type-by-name"
import insertWeaponType from "../database/queries/weapon_type/insert-weapon-type"
import selectWeaponByName from '../database/queries/weapon/select-weapon-by-name'
import insertWeaponCrime from '../database/queries/weapon_crime/insert-weapon-crime'
import insertWeapon from '../database/queries/weapon/insert-weapon'

const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const executeAddCrime = async (request, response) => {
  const { victims, weapons, criminals, crime_type, country } = request.body
  const newCrime = await insertCrime(country)

  victims.forEach(async victim => {
    const newOrExistingVictim = await selectVictimByName(victim) || await insertVictim(victim)
    await insertVictimCrime( newOrExistingVictim.id_victim, newCrime.id_crime )
  })

  weapons.forEach(async weapon => {
    const newOrExistingWeaponType = await selectWeaponTypeByName(weapon.weapon_type) || await insertWeaponType(weapon.weapon_type)
    const newOrExistingWeapon = await selectWeaponByName(weapon.weapon) || await insertWeapon(weapon.weapon, newOrExistingWeaponType.id_weapon_type)
    await insertWeaponCrime( newOrExistingWeapon.id_weapon, newCrime.id_crime )
  })

  await timeout(1000)
  const crime = await selectCrime(newCrime.id_crime)

  return response.status(201).json({ status: 201, response: 'created', crime })
}

export default executeAddCrime