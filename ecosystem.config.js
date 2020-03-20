module.exports = {
  apps : [{
    name: 'athon-backend-test',
    script: 'node ./build/index.js',
    env: {
      NODE_ENV: 'local',
      API_VERSION: 'v1.0',
      MYSQL: {
        HOST: 'localhost',
        USER: 'root',
        KEY: 'athondatabase',
        DATABASE: 'police'
      },
      PORT: 8080,
      ENVIRONMENT: 'LOCAL'
    }
  }]
}
