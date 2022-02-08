/* ES: Requerimos frameworks/librerias */
/* EN: Require framwroks/libreries */
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const web = new Server(server);
const path = require('path');
const port = 7777;

app.use(express.static('./public'));

app.use(express.static('./'));

app.get ('/', (req, res) => {
    res.sendFile('./public/index.html')
})

// ES: Añadimos soporte para los nombres de usuario
// EN: Add support for nicknames
let name = null;
let users = [];

web.on('connection', (socket) => {
    console.log('Nuevo usuario conectado')
    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    socket.on('chat message', (msg) => {
        web.emit('chat message', msg);
    });
});

server.listen(port);