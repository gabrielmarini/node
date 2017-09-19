module.exports = function(app){
    app.get('/loja',function(req,res){
        var conexao = app.config.connection();
        var loja = new app.infra.loja(conexao);
        loja.lista(function(err,result){
            res.render('loja/index',{lista:result});
        });
        conexao.end();
    });
}
