const colors = require('colors')
const fs = require('fs')

module.exports = (file, options) => {
  const response = [];
  return new Promise((resolve, rejects) => {
    fs.readFile(file, 'utf8', (err, contentFile) => {
      if (err) {
        return rejects(err.message);
      }

      const regex = /([^[]+)\](\([^)]*)/gm;
      const items = contentFile.match(regex);

      items.map((item) => {
        const link = item.split('](');
        const title = link[0].replace('\n','');
        const href = link[1];
        response.push({title, href, file});
      });

      console.log(response);
      return resolve(response)
    });
  }).catch(() => {
    console.log(colors.magenta.bold('Please insert a valid file(.md)'))
  });
}
