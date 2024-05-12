const {readFile} = require("fs");
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf-8", (err, result) => {
            if(err) reject(err);
            resolve(result);
        })
    })
} 

getText("./content-test/first.txt").then((result) => console.log(result)).catch((err) => console.log(err))