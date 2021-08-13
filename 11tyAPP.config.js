const path = require('path')
const nunjucks = require('nunjucks')
const packageInfo = require('./package.json');
const fs = require('fs');
const nunjucksMarkdown = require('nunjucks-markdown');
const marked = require('marked');

function getApisList(){
  let data = fs.readFileSync('apis.json');
  let apis = JSON.parse(data);

  return apis;
}

function listApisHtml(){
  let data = getApisList();

  let html = '<ul class="nhsuk-grid-row nhsuk-card-group">';
  let h2 = '';

  //TODO: This should not remain be hardcoded. Figure out how to check if a guide exists.
  const guides = {
    "Terminology Search": "/guides/terminology-guide"
  };

  data.forEach(api => {
    h2 = guides[api.title] ?
      `<a href="${guides[api.title]}">${api.title}</a>` :
      api.title;

    html += `<li class="nhsuk-grid-column-one-half nhsuk-card-group__item">
    <div class="nhsuk-card nhsuk-card--clickable">
      <div class="nhsuk-card__content">
        <h2 class="nhsuk-card__heading nhsuk-heading-m">
          ${h2}
        </h2>
        <p>
          <strong class="nhsuk-tag nhsuk-tag--aqua-green">${api.status}</strong>
          <strong class="nhsuk-tag nhsuk-tag--grey">${api.type}</strong>
        </p>
        <p>${api.description}</p>
      </div>
    </div>
    </li>`
  });
  html += `</ul>`;

  return html;
}

let nunjucksConfig = {
  autoescape: false // Don't encode output from nunjucks macros
}

module.exports = function(eleventyConfig) {
  let appViews = [
    path.join(__dirname, 'app/views'),
    path.join(__dirname, 'app/markdown'),
    path.join(__dirname, 'node_modules/@nwisbeta/nhswales-frontend/packages/components'),
    path.join(__dirname, 'node_modules/@nwisbeta/nhswales-frontend/packages'),
    path.join(__dirname, 'node_modules/@nwisbeta/nhswales-frontend/dist'),
    path.join(__dirname, 'docs/views')
  ]

  let nunjucksAppEnv = nunjucks.configure(appViews, nunjucksConfig);
  nunjucksAppEnv.addGlobal('version', packageInfo.version);

  marked.setOptions({
    renderer: new marked.Renderer(),
  });
  nunjucksMarkdown.register(nunjucksAppEnv, marked);
  eleventyConfig.setLibrary("njk", nunjucksAppEnv);

// Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  eleventyConfig.addShortcode("listApis", listApisHtml);
  
  return {
    dir: {
      input: "./app/views", // Equivalent to Jekyll's source property
      output: "./_site",
      includes: "includes" // relative to input
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
  };
};
