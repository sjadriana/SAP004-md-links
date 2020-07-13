module.exports= (arr, file)=>{
  let links = arr;
  let totalLinks = arr.length;
  let uniqueLinks = [...new Set(arr.map(links => links.href))].length;
  let brokenLinks = 0;
  let promises = [];

  links.forEach(link => {
      let promise = fetch(link.href)
       .then(res =>{
           if(res.status != 200){
               brokenLinks++;
           }
       })
       promises.push(promise)
  })
  return Promise.all(promises)
  .then(()=>{
      console.log(`The file ${file}  consists of the following: \n`);
      console.log(`-- Total: ${totalLinks}`.yellow);
      console.log(`-- Unique: ${uniqueLinks}`.magenta);
      console.log(`-- Broken: ${brokenLinks}`.red);
      return brokenLinks;
  })
};