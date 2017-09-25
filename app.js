let http = require('http')

let server = http.createServer(function(req, res){
    console.log(req.url);
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hey Dude! Server Started!')
});

server.listen(3000, '127.0.0.1');
console.log('server now lisneing at port 3000');