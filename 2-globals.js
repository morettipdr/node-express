// __dirname - path to the directory
// __filename - name of the file
// require - function to use modules
// module - info about module
// process - info about environment

console.log(__dirname);
console.log(__filename);
setTimeout(() => {
    console.log("hello");
}, 1000);
var num = 0;
setInterval(() => {
    console.log(++num);
}, 5000);