export function encriptar (mensaje){
    return mensaje
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}

export function desencriptar (mensajeEncriptado) {
    return mensajeEncriptado
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}

// function mostrarMensajeEncriptado(stringMensajeEncriptado) {
//     mensajeEncriptado.value = stringMensajeEncriptado;
//     mensajeEncriptado.style.display='block';
//     pantallaNoMensaje.style.display='none'
// }

