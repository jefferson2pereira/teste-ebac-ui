const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'crvrfg',
  e2e: {

baseUrl: "http://lojaebac.ebaconline.art.br/",
video: true,

    setupNodeEvents(on, config) {
    
    },
  },
});
