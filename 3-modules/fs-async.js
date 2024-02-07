//filesystem async
const {readFile, writeFile} = require('fs')
console.log('start');

//asynchronous version to read file
readFile('../content/first.txt', 'utf-8', (err, result) => {
    if(err) throw new Error(err)
    const first = result;

    readFile('../content/second.txt','utf-8', (err, result) => {
        if(err) throw new Error(err)
        const second = result;
    })
    writeFile('../content/result-async.txt','result of async writeFile', (err, result) => {
        if(err) throw new Error(err)
        console.log('done with this task');
    })
})
console.log('starting next');  