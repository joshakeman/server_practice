const http = required('http') //built n nonde.js module to handle http traffic

const hostname = '127.0.0.1' //the local computer where the server is running

const port = 3000 //a port we'll use to watch for traffic

const server = http.createServer((req, res) => {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hellow World from Node\n')
}

server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`)
})