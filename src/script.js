
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const ningunMensaje = document.querySelector(".ningun-mensaje");
const ingresaTexto = document.querySelector(".ingresa-texto");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    const divCopiar = document.querySelector(".div-copiar");

    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    ningunMensaje.style.display = "none";
    ingresaTexto.style.display = "none";
    divCopiar.style.display = 'block';
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
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
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

function btnCopiar(){
    let copyText = document.querySelector(".mensaje");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}
