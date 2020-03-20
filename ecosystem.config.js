module.exports = {
  apps : [{
    name: 'athon-backend-test',
    script: 'node ./build/index.js',
    env: {
      NODE_ENV: 'local',
      MYSQL: {
        HOST: 'localhost',
        USER: 'root',
        KEY: 'athondatabase',
        DATABASE: 'police'
      },
      PORT: 8080
    }
  }]
}
