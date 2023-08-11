
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}



function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}



/*document.addEventListener('DOMContentLoaded', function () {
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
});*/