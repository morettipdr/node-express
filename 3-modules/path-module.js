const path = require('path');

console.log(path.sep);

//join the path in one string
const filePath = path.join('./content','subfolder','text.txt')
console.log(filePath);

//output the base
const base = path.basename(filePath)
console.log(base);

//shows the absolute path to the base file
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);