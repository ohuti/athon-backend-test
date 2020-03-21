export const formatMySqlDate = (date) => {
  const day = '0'.concat(date.getDate()).slice(-2)
  const month = '0'.concat(date.getMonth() + 1).slice(-2)
  const year = date.getFullYear()
  const hours = '0'.concat(date.getHours()).slice(-2)
  const minutes = '0'.concat(date.getMinutes()).slice(-2)
  const seconds = '0'.concat(date.getSeconds()).slice(-2)

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

export const generateMySqlDate = () => {
  const date = new Date()
  return formatMySqlDate(date)
}