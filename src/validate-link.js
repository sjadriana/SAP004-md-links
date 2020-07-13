// const fetch = require('node-fetch')

// module.exports = (data) => {
//   return new Promise((resolve) => {
//     fetch(data.href)
//       .then(response => {
//         const { status } = response;
//         data.status = status;
//         data.statusMessage = "ok";
//         return resolve(data);
//       })
//       .catch(err => {
//         const { status } = err;
//         data.status = status ? status : 404;
//         data.statusMessage = "fail";
//         return resolve(data);
//       })
//   });
// }
