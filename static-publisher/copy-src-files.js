var fs = require("fs-extra");

// cp public/* _site/ &&
// cp node_modules/@nwisbeta/nhswales-frontend/packages _site/nhsuk-frontend &&
// cp node_modules/@nwisbeta/nhswales-frontend/dist _site/nhswales-frontend

var error = function(err){
    if (err) return console.error(err)
}

fs.copy('public', '_site', error);
fs.copy('node_modules/@nwisbeta/nhswales-frontend/packages/assets', '_site/nhsuk-frontend', error);
fs.copy('node_modules/@nwisbeta/nhswales-frontend/dist', '_site/nhsuk-frontend', error);
