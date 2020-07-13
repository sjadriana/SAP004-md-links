const fetch = require('node-fetch');
const colors = require('colors');

module.exports = (links) => { 
  //console.log(links)
let promises = links.map(link => fetch(link)
.then (res => {
let resp = {
  url: res.url,
  status: res.status,
  text: res.statusText
  }
  if(resp.status === 200){
    console.log(colors.magenta(res.status), colors.cyan(res.statusText), colors.blue(('url:', link)))
  }else{
    console.log(colors.yellow(res.status), colors.green(res.statusText),('url:', link))
  }
  return resp
  })
  .catch (error => {
      let err = {
        url: link,
        status: 'error',
        text: error.err
      }
      if(err.status === 'error'){
        console.log(colors.yellow(err.status), colors.green(err.text), ('url:', link))
      }
      return err
    })
    )
    return Promise.all(promises)
}



// module.exports = (data) => {
//   return new Promise((resolve) => {
//     fetch(data.href)
//       .then(response => {
//         const { status } = response;
//         data.status = status;
//         data.statusMessage = "ok";
//         console.log(status)
//         return resolve(data)
        
//       })
//       .catch(err => {
//         const { status } = err;
//         data.status = status ? status : 404;
//         data.statusMessage = "fail";
//         return resolve(data);
//       }) 
//   });
//   }