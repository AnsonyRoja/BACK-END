// Express 
// MORGAN 
// cors 
// Express.json() esto nos permitre recibir solicitudes tipo json

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const server = express();


server.use(morgan('dev')); // hacemos uso del middleware el cual nos permite visualizar las peticiones, de una forma mas limpia y asi poder observar el comportamiento, de las solicitudes al servidor
server.use(cors()); // permite solicitudes a diferentes dominios al servidor
server.use(express.json()); // parsea las solicitudes que vienen en formato json 


module.exports = server;
