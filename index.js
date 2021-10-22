/* ES: Requerimos frameworks/librerias */
/* EN: Require framwroks/libreries */
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const web = new Server(server);
const path = require('path')
const port = 7777;
// ES: Leemos el archivo que contiene la informacion de parte del Front-End de nuestro servidor (CSS)
// EN: Read the file that contain the information of Front-End about our server (CSS)

app.use(express.static(__dirname + '/public'));

// ES: Con esto leeremos los archivos no ubicados dentro de la carpeta public, en este caso, los archivos que contiene JavaScript
// EN: With that read the files that aren't located inside the public directory, in that case, the files that contian JavaScript

app.use(express.static(__dirname))

// ES: Con esto leeremos el archivo index.html que es la parte Front-End que nos permite interactuar con el codigo JavaScript
// EN: with that read the file index.html that is the part of Front-End that allow us interact with the JavaScript code

app.get ('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

/*
Esta es la parte vital de nuestro programa, sin ella, no habria comunicacion cliente-servidor.
Y ninguno de estos seria capaz de captar o enviar mensajes o informacion
*/

// Primero notificamos de que un usuario establecio conexion con nuestro servidor o que ha cortado la comunicacion con el mismo
// Luego 'socket' escucha el mensaje del cliente, con socket.on y lo emite con io.emit

web.on('connection', (socket) => {
    console.log('Nuevo usuario conectado')
    socket.on('disconnect', () =>{
        console.log('Usuario desconectado');
    });
    socket.on('chat message', (msg) => {
        web.emit('chat message', msg);
    });
});

// Hacemos que el servidor escuche en un puerto especifico, en este caso el 7777
server.listen(port);