var app = require('./config/express')();
var routes = require('./app/appRoutes')(app);
app.listen(3000,function(){
    console.log("Server Online!");
});