const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
    res.end(`<h1>I'm Ok</h1>\nserver: active`)
})
server.listen(3000)