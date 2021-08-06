var fs = require("fs-extra");

var error = function(err){
    if (err) return console.error(err)
}

fs.copy('public', '_site', error);
fs.copy('node_modules/@nwisbeta/nhswales-frontend/packages/assets', '_site/nhsuk-frontend', error);
fs.copy('node_modules/@nwisbeta/nhswales-frontend/dist', '_site/nhsuk-frontend', error);
