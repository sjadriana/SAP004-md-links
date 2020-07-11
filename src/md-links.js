const fs = require('fs');
const readFile = require('./read-file');
const validateFileExtension = require('./validate-file-extension');

module.exports = (file, options) => {
  validateFileExtension(file);
  readFile(file, options).then((response) => {
    console.log("here response md-links");
    console.log(response);
  });
};
