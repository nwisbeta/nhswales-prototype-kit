const path = require('path')
const nunjucks = require('nunjucks')
const packageInfo = require('./package.json');

var nunjucksConfig = {
  autoescape: false // Don't encode output from nunjucks macros
}

module.exports = function(eleventyConfig) {
  var appViews = [
    path.join(__dirname, 'app/views/'),
    path.join(__dirname, 'node_modules/@nwisbeta/nhswales-frontend/packages/components'),
    path.join(__dirname, 'node_modules/@nwisbeta/nhswales-frontend/packages'),
    path.join(__dirname, 'node_modules/@nwisbeta/nhswales-frontend/dist'),
    path.join(__dirname, 'docs/views/')
  ]

  var nunjucksAppEnv = nunjucks.configure(appViews, nunjucksConfig);
  nunjucksAppEnv.addGlobal('version', packageInfo.version);

  eleventyConfig.setLibrary("njk", nunjucksAppEnv);

  return {
    dir: {
      input: "./app/views", // Equivalent to Jekyll's source property
      output: "./_site",
      includes: "includes" // relative to input
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk"]
  };
};
