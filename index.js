const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const colors = require('colors')
const validateFileExtension = require('./validate-file-extension');
const validateLink = require('./validate-link');
const { command } = require('yargs');



//pegando links


const options = {
  validate: false,
  stats: false
};

function getLinks(command,options){  
  if(command ==="--validate"){
    options.validate = true;
  } else if( command ==="--stats"){
    options.stats = true; 
  }
}





//  function getFunctions(command, options);{
//   switch(command) {
//   case '--validate':
//     return {...options, validate: true};
//   case '--stats':
//     return {...options, stats: true};
//   default:
//     return options;
//   }
//  }









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

module.exports = { getLinks}