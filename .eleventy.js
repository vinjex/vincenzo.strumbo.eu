// Eleventy configuration file
module.exports = function (config) {

  config.addPassthroughCopy("assets/css");
  config.addPassthroughCopy("assets/data");
  config.addPassthroughCopy("assets/images");

  return {
    dir: {
      passthroughFileCopy: true,
      includes: 'views',
      output: "dist"
    }
  }

};