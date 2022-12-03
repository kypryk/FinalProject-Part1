const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'http://juice-shop-sanitarskyi.herokuapp.com',
    baseUrl: 'https://juice-shop.herokuapp.com/',
    watchForFileChanges: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
