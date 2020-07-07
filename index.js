const fs = require('fs');
const mdLinks = (file) => {
  const regexMdlinks = /([^[]+)\](\([^)]*)/gm
  const arr = [];
return new Promise ((resolve, rejects) => {
  fs.readFile(file,'utf8', (err, data) => {
    if (err){
      rejects (err.message);
    } else {
      const regex = data.match(regexMdlinks)
      regex.forEach((el) => {
        const Text = el.split('](');
        const title = Text[0].replace('\n','');
        const href =Text[1]
        arr.push( {title, href, file})
      })
      resolve(arr)
      console.log(arr)
    }
  });
});
}
mdLinks(process.argv[2])
// module.exports = mdLinks

