const {readFile} = require("fs");
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf-8", (err, result) => {
            if(err) reject(err);
            resolve(result);
        })
    })
}

const start = async () => {
    try {
        const first = await getText("./content-test/first.txt");
        const second = await getText("./content-test/second.txt");
        console.log("first: " + first + " second: " + second);
    } catch (error) {
        throw new Error(error);
    }
    
}
start()
