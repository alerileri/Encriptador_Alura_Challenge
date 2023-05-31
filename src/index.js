import { encriptar, desencriptar } from './encriptar.js';

document.addEventListener('DOMContentLoaded', function () {
    //const form = document.getElementById('form-mensaje');
    const btnEncriptar = document.getElementById('encriptar');
    const btnDesencriptar = document.getElementById('desencriptar');
    const mensajeInput = document.getElementById('mensaje');
    const mensajeEncriptado = document.getElementById('mensaje-secreto');
    const noMensaje = document.getElementById('no-mensaje');

    btnEncriptar.addEventListener('click', function(event){
        event.preventDefault();
        const valorMensaje = mensajeInput.value.trim();
        if (valorMensaje != '') {
            const stringMensajeEncriptado = encriptar(valorMensaje);
            mensajeEncriptado.textContent = stringMensajeEncriptado;
            noMensaje.style.display = 'none'
        } else {
            mensajeEncriptado.style.display = 'none'
            noMensaje.style.display = 'block';
        }        
    });

    btnDesencriptar.addEventListener('click', function(event){
        event.preventDefault();
        const valorMensajeEncriptado = mensajeEncriptado.value.trim();
        if(valorMensajeEncriptado !== '') {
            const stringMensajeDesencriptado = desencriptar(valorMensajeEncriptado);
            mensajeInput.value = stringMensajeDesencriptado;
            mensajeEncriptado.style.display = 'none';
            noMensaje.style.display = 'block';
        }
    });
});