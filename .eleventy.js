// Eleventy configuration file
module.exports = function (config) {

  config.addPassthroughCopy("app/assets/css");
  config.addPassthroughCopy("app/assets/data");
  config.addPassthroughCopy("app/assets/images");

  return {
    dir: {
      passthroughFileCopy: true,
      includes: 'app/partials',
      output: "dist"
    }
  }

};