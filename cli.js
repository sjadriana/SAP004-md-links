#!/usr/bin/env node
const colors = require('colors')
const { mdLinks} = require('./index.js')
const validateLink = require('../validate-link');
//Se você usa as informações da posição 0 do process.arg()
const command = process.argv[2]
console.log(command)

//Switch avalie cada case na posição 0 do código process.argv
switch(command){
  case '--validate':
      console.log(colors.yellow.bold('VALIDATED LINKS'))
    //validateLink(argv.file)
    mdLinks(argv.file,'--validate')
    break;
  case '--stats':
    console.log(colors.yellow.bold('STATS'))
    mdLinks(argv.file,'--stats')
    break;
  default:
    console.log(colors.yellow.bold(''))
  }
  