module.exports = function(router){
    router.get('/loja',function(req,res){
        var conexao = router.config.connection();
        var LojaDAO = new router.infra.LojaDAO(conexao);
        LojaDAO.lista(function(err,result){
            res.render('loja/index',{lista:result});
        });
        conexao.end();
    });

    router.get('/produtos/cadastrar', function(que, res){
        res.render('loja/formCad');
    });
    router.post('/produtos/cadastrar', function(req,res){
        var produto = req.body;
        var conexao = router.config.connection();
        var LojaDAO = new router.infra.LojaDAO(conexao);
        LojaDAO.salva(produto, function(error, resultados){
            res.redirect('/loja');
        });
    });
}
