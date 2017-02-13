var http=require('http');

var s= http.createServer(function(req, res){
           res.writeHead(200,{'content-type':'text/plain'});
           res.write("Hola\n");
           res.end("Mundo\n");
});

s.listen(8000);

