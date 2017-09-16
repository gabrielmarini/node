var express = require('express');
var app = express();
app.listen(3000,function(){
    console.log("Server Online!");
});
app.set('view engine','ejs');
//Rotas Manuais
app.get('/loja',function(req,res){
    res.render("loja/index");
});