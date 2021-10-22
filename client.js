/* Requerimos el codigo de socket.io, el cual utilizamos para captar mensajes del servidor y emitirlos en nuestra web */
const socket = io();
/* Hacemos seleccion de los elementos HTML y los almacenamos en constantes para mas tarde utilizarlos */
const form = document.getElementById('form');
const input = document.getElementById('input');
const message = document.getElementById('message')
/*
Escuchamos los 'eventos' del elemento form (almacenado anteriormente en una constante), y eliminamos el comportamiento
por defecto de recarga de una web al clickar en enviar. Luego el mensaje que sera capturado sera escrito como valor en el
elemento input (almacenado en la constante del mismo nombre)
*/
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(input.value){
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

/* Con esto capturamos el mensaje y lo escribiremos como un elemento 'li' en el documento */
socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    message.appendChild(item);
});