module.exports = function(app){
    app.get('/loja',function(req,res){
        var mysql = require('mysql');
        var conexao = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'node'
        });

        conexao.query('select * from livros',function(err,result){
            res.render('loja/index',{lista:result});
        });
        conexao.end();
    });
}
