module.exports = {
  apps : [{
    name: 'athon-backend-test',
    script: 'node ./build/index.js',
    env: {
      NODE_ENV: 'local',
      MYSQL: {
        HOST: 'localhost',
        USER: 'root',
        KEY: 'athonbackendtest',
        DATABASE: 'police'
      },
      PORT: 3000
    }
  }]
}
