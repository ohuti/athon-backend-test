import athonDB from '../../config'

const formatColumnRows = (columnRows) => {
  return columnRows.length === 1 ? columnRows[0] : [ ...columnRows ]
}

const findCrimeWithDetails = async (filters = '') => {
  return new Promise((resolve, reject) => {
    athonDB.query(`select
        c.id_crime,
        v.tx_name as victim_name,
        w.tx_model as weapon_name,
        wt.tx_weapon_type as weapon_type,
        cm.tx_name as criminal_name,
        ct.tx_type as crime_type,
        c.tx_country as country, c.dt_crime as crime_date
      from crime c
      left join victim_crime vc on c.id_crime = vc.id_crime
      left join weapon_crime wc on c.id_crime = wc.id_crime
      left join criminal_crime cc on c.id_crime = cc.id_crime
      left join victim v on v.id_victim = vc.id_victim
      left join weapon w on w.id_weapon = wc.id_weapon
      left join weapon_type wt on w.id_weapon_type = wt.id_weapon_type
      left join criminal cm on cm.id_criminal = cc.id_criminal
      left join crime_type ct on cc.id_crime_type = ct.id_crime_type
      ${filters} order by c.id_crime`, (error, results) => {
        if (error) {
          return reject(error)
        }
        if (!results.length) {
          return resolve(null)
        }

        const crimesIds = [...new Set(results.map(result => result.id_crime))]

        const crimes = crimesIds.map(crimeId => {
          const filteredResults = results.filter(result => result.id_crime === crimeId)

          const weaponsWithoutType = [...new Set(filteredResults.map(result => result.weapon_name || 'not_informed'))]
          const weaponType = [...new Set(filteredResults.map(result => result.weapon_type || 'not_informed'))]
          const crimeDate = formatColumnRows([...new Set(filteredResults.map(result => +new Date(result.crime_date || 'not_informed')))])
          
          return {
            crimeId,
            victims: [...new Set(filteredResults.map(result => result.victim_name || 'not_informed'))],
            weapons: weaponsWithoutType.map((weapon, index) => ({ weapon, weapon_type: weaponType[index] })),
            criminals: [...new Set(filteredResults.map(result => result.criminal_name || 'not_informed'))],
            crimeTypes: [...new Set(filteredResults.map(result => result.crime_type || 'not_informed'))],
            country: formatColumnRows([...new Set(filteredResults.map(result => result.country || 'not_informed'))]),
            crimeDate: new Date(crimeDate)
          }
        })

        return resolve(crimes)
      }
    )
  }).catch (error => { throw error })
}

export default findCrimeWithDetails