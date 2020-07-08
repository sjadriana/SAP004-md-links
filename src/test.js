// const link = http.getHttp('http://www.google.com');
// link.then(success => {
//   console.log(success);
// })
// .catch(error => {
//   console.log(error); })

//   if (validate) {
//     regex.map((obj) => {
//       axios.get(obj.href).then((response) => {
//         console.log(file +" " + obj.href +" " +response.status + " " +response.statusText +" " +obj.text
//         );
//     })
//     .catch((error) => {
//       console.log(obj.href +" - status: " +error.response.status +" - statusText: " +error.response.statusText
//       );
//       });
//     });
//   }
//   if (stats) {
//     const links = regex.map((item) => item.href);
//     const set = new Set(links);
//     resolved(`\nUnique: ${set.size} \n All: ${links.length}`);
//   }

//   resolved(checkLink);

// }

 


// mdLinks(
// process.argv.slice(2)[0],
// process.argv.slice(2)[1],
// process.argv.slice(2)[2]
// )
// .then((success) => console.log(success))
// .catch((error) => console.log(error));

// teste 2

//  const fs = require('fs');
//  const axios = require("axios");
// const path = require('path');
// const fetch = require('node-fetch');

//  const mdLinks = (file) => {
//    const regexMdlinks = /([^[]+)\](\([^)]*)/gm
//    const arr = [];
//    return new Promise ((resolve, rejects) => {
//    fs.readFile(file,'utf8', (err, data) => {
//      if (err){
//        rejects (err.message);
//      } else {
//        const regex = data.match(regexMdlinks)
//        regex.forEach((el) => {
//          const Text = el.split('](');
//          const title = Text[0].replace('\n','');
//          const href =Text[1]
//         arr.push( {title, href, file})
//        })
//        resolve(arr)
//        console.log(arr)
//      }
//    });
//  ;


//    const mark = (path) =>{
//     let regEx = (/https?:\S+\w/g);
//     let links = path.match(regEx)
//       validateLinks(links)
//    }


//    const validateLinks = (links) =>{
//       for(let i=0; i<links.length;i++){
//         fetch(links[i])
//         .then(res => {
//           if(res.status == 200){
//             console.log('link valido: ',links[i],res.status )
//           }else{
           
//             console.log('link invalido: ', links[i] ,res.status )
//           }
//         }).catch(e =>{
//           console.log()
//         })
//       }
//    }
//   })
//  }
//  mdLinks(process.argv[2])





// //lendo arquivo 
// function mdLinks(file,options){
//   const expReg = /([^[]+)\](\([^)]*)/gm
//   const arr = [];
//   const string = fs.readFileSync(file, 'utf-8')
//   console.log(string)
//   if (err){
//       rejects (err.message);
//   } else {
//       const regex = data.match(expReg)
//       regex.forEach((el) => {
//       const Text = el.split('](');
//       const title = Text[0].replace('\n','');
//       const href =Text[1]
//       arr.push( {title, href, file})
//       })
//       resolve(arr)
//       console.log(arr)
//       }
//   // getLinks(string,options)
// }