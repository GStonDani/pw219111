const express = require('express');
const routes = express.Router();

//GET es lo que solicita el
//navegador del cliente
routes.get("/",(req,res) =>{

res.send("Hola mundo Node");




});
module.exports = routes;