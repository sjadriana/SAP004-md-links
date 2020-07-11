const colors = require('colors');
const fs = require('fs');
const validateLink = require('./validate-link');

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

        let data = {title, href, file};
        if (options.validate) {
          validateLink(data).then((response => {
            data = response;
            // console.log(colors.magenta.bold(`${response.file} ${response.href} ${response.statusMessage} ${response.status} ${response.title}`)); // console.log como exemplo de exibição da linha de comando
          }));
        } else {
          // console.log(colors.magenta.bold(`${data.file} ${data.href} ${data.text}`)); // console.log como exemplo de exibição da linha de comando
        }

        response.push(data);
      });


      return resolve(response)
    });
  }).catch(() => {
    console.log(colors.magenta.bold('Please insert a valid file(.md)'))
  });
}
