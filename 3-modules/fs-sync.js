//filesystem
const {readFileSync, writeFileSync} = require('fs')
console.log('start');

//method to read the file
const first = readFileSync('../content/first.txt', 'utf-8')
const second = readFileSync('../content/second.txt', 'utf-8')
console.log(`first: ${first}, second: ${second}`);

//it creates the file and sets value, or overwrites it, if it already exists
writeFileSync('../content/third-created.txt', `Here is the result: ${first}, and ${second}`,/* this will make it append: {flag: "a"}*/)
console.log('done with this one');
console.log('starting next one');