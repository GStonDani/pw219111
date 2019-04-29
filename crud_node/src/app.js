const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql'); //sequel
const myconnection = require('express-myconnection')
const app = express();

//importar rutas
const indiceRoutes=require('./rutas/index');
//Configuarciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(_dirname,'views'));
//Usamos rutas
app.use('/').indiceRoutes;

//Middleware
app.use(morgan('dev'));
app.use(myconnection(mysql,{

	host: 'localhost',
	user: 'root',
	password: '',
	port:: 3306,
	database: 'crudnodejsmysql'


},'single'))

//acTIVAR LA CONFUGURACION QUE ESCUCHA
app.listen(app.get('port'), () => {
	console.log("Escuchando en puerto 3000");
})

