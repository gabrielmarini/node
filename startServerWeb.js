var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == '/teste'){
        res.end("Teste 1");
    }else if(req.url == "/loja"){
        res.end("Loja");
    }else{
        res.end("Home");
    }
});
server.listen(3000);
console.log("Servidor iniciado!");