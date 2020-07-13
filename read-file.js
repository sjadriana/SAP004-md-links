const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const colors = require('colors');

module.exports = (file) => {
  const regexMdlinks = /([^[]+)\](\([^)]*)/gm
  const arr = [];
return new Promise ((resolve, rejects) => {
  fs.readFile(file,'utf8', (err, data) => {
  if (err){
    rejects (err.message);
  } else { // add else para validate
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
//readFile(process.argv[2])