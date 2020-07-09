const options={
  file:{
    demand:true,
    alias:'f', //é uma abreviatura pra file e é a rota p/ o arquivo
  }
}

//
//Cria a variável argv. Yargs

const argv = require('yargs')
  .command('--validate','Comando para validar os links',options)
  .command('--stats','Comando para obter estatisticas',options)
  .command('--validateAndStats','Comando para validar links e obter estatisticas',options)
  .command('', 'comando para trazer sem validar',options)
  .help()
  .argv


//Exportando argv 
module.exports={
  argv
}