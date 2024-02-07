const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/') res.end('Welcome to home')
    if(req.url === '/about') res.end('Welcome to about')
    res.end(`<h1>Ops, 404, Page does not exist</h1><a href='/'>back to home</a>`)
})

server.listen(3333);