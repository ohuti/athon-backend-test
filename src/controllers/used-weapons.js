import selectUsedWeapons from "../database/queries/weapon/select-used-weapons"

const executeUsedWeapon = async (request, response) => {
  const weapons = await selectUsedWeapons()

  return response.status(200).json({
    status: 200,
    response: 'OK',
    weapons
  })
}

export default executeUsedWeapon