const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const colors = require('colors')
const validate = require ('./validate-link.js');
const stats = require('./stats.js');




// (valida se é arquivo .md)
function validateFile(file,options){
  if(path.extname(file) === '.md'){
   // console.log(       file)
    mdLinks(file,options)
    }else{
      console.log(colors.magenta.bold('Plese insert a valid file(.md)'))
    }
} 
validateFile(process.argv[2], process.argv[3])

//lendo arquivo 
function mdLinks(file,options){
  const string = fs.readFileSync(file, 'utf-8')
    //console.log(string)
  getLinks(string,options)
}
//pegando links
function getLinks(string,options){
  const expReg = /(https?:)([\w\.\/\-\#\?\=\&]+)/g
  const links = string.match(expReg)
   //console.log(links)
    if(options==="--validate"){
      validate(links)
    } else if(options==="--stats"){
      stats(links)
    } 
}

function readFile(file){
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
  readFile(process.argv[2])




 //Validando os links 






module.exports = {
    mdLinks, validateFile
    // readFile,
    // validateFile
}

