var express = require("express");
var bodyParser = require('body-parser');

var app = express();
//cargar rutas
var convertidor_routes = require('./routes/convertidos');

//middlewares
app.use(bodyParser.urlencoded({extended:false, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});

//rutas
app.use('/api', convertidor_routes);

//exportar
module.exports = app;