import selectUsedWeapons from "../database/queries/weapon/find-used-weapons"

const executeUsedWeapon = async (request, response) => {
  const weapons = await selectUsedWeapons()

  if(!weapons){
    throw { status: 200, response: 'used_weapons_not_found', message: 'not used weapon were found in database.' }
  }

  return response.status(200).json({
    status: 200,
    response: 'OK',
    weapons
  })
}

export default executeUsedWeapon