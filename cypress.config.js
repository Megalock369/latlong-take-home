const { defineConfig } = require("cypress")

module.exports = defineConfig({
  env: 
    {
      "latUrl": 'https://www.latlong.net/',
      "logUrl": 'https://www.latlong.net/user/login',
      "regUrl": 'https://www.latlong.net/user/register',
      "adrUrl": 'https://www.latlong.net/convert-address-to-lat-long.html'
    },

  e2e: {
    setupNodeEvents(on, config) {
      //Grep 'Tags' configs
      require('@cypress/grep/src/plugin')(config)
      return config
    },

  //Mochawesome configs
  reporter: 'mochawesome',
  reporterOptions: {
  reportDir: 'cypress/results',
  overwrite: true,
  html: true,
  json: true,
  
  },
  },
})