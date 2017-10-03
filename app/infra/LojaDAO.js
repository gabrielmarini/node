function LojaDAO(connection){
    this.connection = connection;
}

LojaDAO.prototype.lista = function(callback){ 
    this.connection.query('select * from livros',callback);
}

LojaDAO.prototype.salva = function(produto,callback){ 
    this.connection.query('insert into livros set ?',produto,callback);
}
module.exports = function(){
    return LojaDAO;
}