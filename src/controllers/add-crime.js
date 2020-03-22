import saveCrime from "../database/queries/crime/save-crime"

import findVictimIdByName from "../database/queries/victim/find-victim-id-by-name"
import saveVictimCrime from "../database/queries/victim_crime/save-victim-crime"
import insertVictim from "../database/queries/victim/save-victim"

import findWeaponTypeIdByName from "../database/queries/weapon_type/find-weapon-id-type-by-name"
import saveWeaponType from "../database/queries/weapon_type/save-weapon-type"
import findWeaponIdByName from '../database/queries/weapon/find-weapon-id-by-name'
import saveWeaponCrime from '../database/queries/weapon_crime/save-weapon-crime'
import saveWeapon from '../database/queries/weapon/save-weapon'

import findCriminalIdByName from '../database/queries/criminal/find-criminal-id-by-name'
import saveCriminal from '../database/queries/criminal/save-criminal'

import saveCriminalCrime from '../database/queries/criminal-crime/save-criminal-crime'
import updateCriminalCrimeCrimeType from '../database/queries/criminal-crime/update-criminal-crime-crime-type'

import findCrimeTypeIdByName from '../database/queries/crime_type/find-crime-type-id-by-name'
import saveCrimeType from '../database/queries/crime_type/save-crime-type'

const capitalizeFirstLetter = (words) => {
  words = words.split(' ')
  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

const executeAddCrime = async (request, response) => {
  const { victims, weapons, criminals, crime_type, country } = request.body
  const newCrimeId = await saveCrime(country)

  await victims.forEach(async victim => {
    victim = await capitalizeFirstLetter(victim)
    const victimId = await findVictimIdByName(victim) || await insertVictim(victim)
    await saveVictimCrime( victimId, newCrimeId )
  })

  await weapons.forEach(async weapon => {
    weapon.weapon_type = await capitalizeFirstLetter(weapon.weapon_type)
    weapon.weapon = await capitalizeFirstLetter(weapon.weapon)
    const weaponTypeId = await findWeaponTypeIdByName(weapon.weapon_type) || await saveWeaponType(weapon.weapon_type)
    const weaponId = await findWeaponIdByName(weapon.weapon) || await saveWeapon(weapon.weapon, weaponTypeId)
    await saveWeaponCrime( weaponId, newCrimeId )
  })

  await criminals.forEach(async criminal => {
    criminal = await capitalizeFirstLetter(criminal)
    const criminalId = await findCriminalIdByName(criminal) || await saveCriminal(criminal)
    await saveCriminalCrime(criminalId, newCrimeId)
  })

  await crime_type.forEach(async crimeType => {
    crimeType = await capitalizeFirstLetter(crimeType)
    const crimeTypeId = await findCrimeTypeIdByName(crimeType) || await saveCrimeType(crimeType)
    await updateCriminalCrimeCrimeType(newCrimeId, crimeTypeId)
  })

  return response.status(201).json({ status: 201, response: 'created' })
}

export default executeAddCrime