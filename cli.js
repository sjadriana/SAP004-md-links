#!/usr/bin/env node
const argv=require('./commands').argv
const colors = require('colors/safe')
const { readFile,validateFile } = require('./index.js')
//Se você usa as informações da posição 0 do process.arg()
const command=argv._[0]


//Switch avalie cada case na posição 0 do código process.argv
switch(command){
  case 'validate':
    console.log(colors.yellow.bold('***** V A L I D A T E D  L I N K S ******'))
    //validateLinks(argv.file)
    readFile(argv.file,"--validate")
    break;
  case 'stats':
    console.log(colors.yellow.bold('***** S T A T S ******'))
    readFile(argv.file,"--stats")
    break;
  case 'validate-stats':
    console.log(colors.yellow.bold('***** V A L I D A T E D  L I N K S  &  S T A T S ******'))
    validateFile(argv.file,"validateAndStats")
    break;
  default:
    console.log(colors.yellow.bold('***** ¿ N E E D  H E L P ?  --help ******'))
}
  