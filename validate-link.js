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