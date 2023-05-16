const http = require('http');

const server = http.createServer(function(req, res){
    res.writeHead(200);

    res.end("chin")
});
const port=3000;
server.listen(port, '127.0.0.1', ()=> console.log('server on port '+port));
