export const notFoundHandler = (request, response) => response.status(404).json({ status: 404, response: 'not_found' })

export const databaseRuntimeError = (error, request, response, next) => {
  if(error.errno){
    console.error('[*] ', { ...error })
    response.status(500).json({ status: 500, response: 'internal_server_error' })
    return
  }

  next(error)
}

export const exceptionHandler = (error, request, response, next) => {
  if(typeof error.status === 'number'){
    response.status(error.status).json({ ...error })
    return
  }

  console.error('[+]', error)
  return response.status(500).json({ status: 500, response: 'internal_server_error' })
}