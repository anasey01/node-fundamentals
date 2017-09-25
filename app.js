let fs = require('fs');
let http = require('http');


// Creating a server and serving HTML to the Client Via Stream (Pipe).
let server = http.createServer(function(req, res){
console.log(req.url);
res.writeHead(200, {'Content-Type':'text/html'});
let myReadStream = fs.createReadStream(__dirname + '/index.html');
myReadStream.pipe(res)
});

server.listen(3000, '127.0.0.1');
console.log('Server is listening on port 3000');
