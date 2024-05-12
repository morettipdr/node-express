const {readFile, writeFile} = require("fs").promises;

const start = async () => {
    try {
        const first = await readFile("./content-test/first.txt", "utf-8");
        const second = await readFile("./content-test/second.txt", "utf-8");
        await writeFile("./content-test/result-util-fs.txt", `Writing right now, first: ${first}, second: ${second}`)
        const third = await readFile("./content-test/result-util-fs.txt", "utf-8");
        console.log(`first: ${first}, second: ${second}, third: ${third}`);
    } catch (error) {
        throw new Error(error);
    }
    
}
start()