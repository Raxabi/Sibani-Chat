/* Requerimos el codigo de socket.io, el cual utilizamos para captar mensajes del servidor y emitirlos en nuestra web */
const socket = io();
/* Hacemos seleccion de los elementos HTML y los almacenamos en constantes para mas tarde utilizarlos */
const form = document.getElementById('form');
const input = document.getElementById('input');
const message = document.getElementById('message');

/* Escuchamos eventos del formulario y lo emitimos */

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
        console.log("Estoy fucionando!");
    }
});

/* Con esto escribiremos el mensaje mandandolo como contenido al elemento 'li' en el documento */
socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    message.appendChild(item);
});