var http = require('http');

var server = http.createServer(function(req, res){
   res.writeHead(200,{'Content-Type': 'text/html'});
   res.write('Hello <b>World</b>!');
    //res.writeHead(200,{'Content-type':'application/json'});
   // res.write('{"message": "Hello World"}');
    res.end("Hi, Selamat datang Node Js");
});

server.listen(8000);

console.log("server running on http://localhost:8000");