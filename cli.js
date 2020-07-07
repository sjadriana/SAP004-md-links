#!/usr/bin/env node
const mdLinks = require('.index.js');
const file = process.argv[2];

mdLinks(file)
  .then((result) => {
    result.forEach(el => {
      console.log(el.title, el.href);
    });
  })
  .catch((resolve) => console.log(resolve));

  