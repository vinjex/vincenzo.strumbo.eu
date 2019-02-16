// Eleventy configuration file
module.exports = function (config) {

  config.addPassthroughCopy("assets");

  return {
    dir: {
      passthroughFileCopy: true,
      includes: 'views',
      output: "dist"
    }
  }

};