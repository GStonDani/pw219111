const express = require('express')
const app = express();
//importar rutas
const indiceRoutes=require('./rutas/index');

//Usamos rutas
app.('/').indiceRoutes;

app.listen(3000, () => {
	console.log("Escuchando en puerto 3000");
})