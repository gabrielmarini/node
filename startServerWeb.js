var http = require('http');
var server = http.createServer(function(req,res){
    res.end("Servidor online");
});
server.listen(3000);
console.log("Servidor iniciado!");