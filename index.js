const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const colors = require('colors/safe')


// (valida se é arquivo .md)
function validateFile(file,options){
    if(path.extname(file) === '.md'){
      // console.log(       file)
        mdLinks(file,options)
    }else{
        console.log(colors.magenta.bold('***** Arquivo invalido(.md)*****'))
    }
} 
validateFile(process.argv[2], process.argv[3])

//lendo arquivo 
function mdLinks(file,options){
    const string = fs.readFileSync(file, 'utf-8')
    console.log(string)
    getLinks(string,options)
}

//pegando links
function getLinks(string,options){
    const expReg = /(https?:)([\w\.\/\-\#\?\=\&]+)/g
    const links = string.match(expReg)
    // console.log(links)
        if(options==="validateAndStats"){
            validateAndStats(links)
        }else if(options==="--validate"){
            onlyValidate(links)
        }else if(options==="--stats"){
            onlyStats(links)
        } else {
          //função retornando links sem validação
        
        }
}
// const read = (file) => {
//   const regexMdlinks = expReg
//   const arr = [];
//   return new Promise ((resolve, rejects) => {
// fs.readFile(file,'utf8', (err, data) => {
//     if (err){
//       rejects (err.message);
//   } else {
//       const regex = data.match(regexMdlinks)
//       regex.forEach((el) => {
//         const Text = el.split('](');
//         const title = Text[0].replace('\n','');
//       const href =Text[1]
//       arr.push( {title, href, file})
//       })
//       resolve(arr)
//       console.log(arr)
//     }
// });
// });



//Validando os links 
function validateAndStats(links){ 
    let promises = links.map(link => fetch(link)
        .then (res => {
        let resp = {
            url: res.url,
            status: res.status,
            text: res.statusText
        }
        console.log(resp)
        if(resp.status === 200){
            console.log(colors.magenta(res.status), colors.cyan(res.statusText), ('url:', link))
        }else{
            console.log(colors.yellow(res.status), colors.green(res.statusText),('url:', link))
        }
        return resp
        
    })
    .catch (error => {
        let err = {
            url: link,
            status: 'error',
            text: error.errno
        }
        if(err.status === 'error'){
            console.log(colors.yellow(err.status), colors.green(err.text), ('url:', link))
        }
        return err
    })
    )
    return Promise.all(promises)
    .then(res => statsLinksValidate(res))
}

function statsLinksValidate (res){
    console.log(colors.rainbow('Total links: '), (res.length))
    console.log(colors.magenta.bold('Broken links: ', res.reduce((accountant, element) => {
        if (element.status !== 200){
            return accountant += 1
        }
        return accountant
        },0)))
    console.log(colors.green.bold('Functional links: ', res.reduce((accountant, elemento) => {
        if (elemento.status === 200){
            return accountant += 1
        }
        return accountant
        },0)))

    return res
}

//pegando os links
function onlyValidate(links){ 
    let promises = links.map(link => fetch(link)
        .then (res => {
        let resp = {
            url: res.url,
            status: res.status,
            text: res.statusText
        }
            if(resp.status === 200){
                console.log(colors.magenta(res.status), colors.cyan(res.statusText), ('url:', link))
            }else{
                console.log(colors.yellow(res.status), colors.green(res.statusText),('url:', link))
            }
            return resp
    })  
    .catch (error => {
        let err = {
            url: link,
            status: 'error',
            text: error.errno
        }
            if(err.status === 'error'){
                console.log(colors.yellow(err.status), colors.green(err.text), ('url:', link))
            }
            return err
    })
    )
    return Promise.all(promises)
}


module.exports = {
    mdLinks,
    validateFile
}

