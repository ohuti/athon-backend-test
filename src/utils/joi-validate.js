const validate = (schema) => (request, response, next) => {
  const { error } = schema.unknown().validate(request)
  const valid = error === null

  if(!valid){
    return response.status(400).json({ status: 400, response: 'bad_request', error: error.message })
  }

  next()
}

export default validate