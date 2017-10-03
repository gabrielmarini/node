function LojaDAO(connection){
    this.connection = connection;
}

LojaDAO.prototype.lista = function(callback){ 
    this.connection.query('select * from livros',callback);
}
module.exports = function(){
    return LojaDAO;
}