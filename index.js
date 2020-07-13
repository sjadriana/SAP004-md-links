const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const colors = require('colors')
const validate = require ('./validate-link.js');
const readFile = require('./read-file.js')
const stats = require('./stats.js');
const validateStats = require('./validate-stats.js');



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
    } else if (options === '---validateAndStats') { 
      validateStats(link)
    }
}
  

// function  onlyStats (res){
//   console.log(colors.rainbow('Total links: '), (res.length))
//   console.log(colors.magenta.bold('Broken links: ', res.reduce((accountant, element) => {
//     if (element.status !== 200){
//       return accountant += 1
//     }
//     return accountant
//       },0)))
//     console.log(colors.green.bold('Functional links: ', res.reduce((accountant, elemento) => {
//       if (elemento.status === 200){
//         return accountant += 1
//       }
//       return accountant
//       },0)))
//     return res
// }


 //Validando os links 






module.exports = {
    mdLinks, validateFile
    // readFile,
    // validateFile
}

