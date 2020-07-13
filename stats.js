const fetch = require('node-fetch');
const colors = require('colors');
const path = require('path');

module.exports = (arr, file) =>{
  let totalLinks= arr.map((el)=> el.href)
  let uniqueLinks = arr.filter((el, index, link)=>{return index===link.indexOf(el)})
  let brokenLinks = arr.filter(el => el.status >= 400/* && el.status === 'error' */
  )

  console.log(`The file ${file} consists of the following: \n`);
  console.log(`-- Total: ${totalLinks.length}`.yellow);
  console.log(`-- Unique: ${uniqueLinks.length}`.magenta);
  console.log(`-- Broken Links: ${brokenLinks.length}`.red)
};

