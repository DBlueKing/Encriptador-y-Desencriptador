// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Función para mostrar/ocultar elementos
function toggleElements(isVisible) {
    const imageElemento = document.getElementById('muñeco'); // Elemento de la imagen del muñeco
    const instruccionElemento = document.getElementById('placeholderText'); // Elemento de texto de instrucción
    const outputElemento = document.getElementById('outputTexto'); // Elemento de salida de texto
    const copiarButton = document.querySelector('.copiar'); // Botón de copiar texto

    if (isVisible) { // Mostrar elementos de instrucción
        imageElemento.style.display = "block";
        instruccionElemento.style.display = "block";
        outputElemento.style.display = "none";
        copiarButton.style.display = "none";
    } else { // Mostrar el texto encriptado/desencriptado
        imageElemento.style.display = "none";
        instruccionElemento.style.display = "none";
        outputElemento.style.display = "block";
        copiarButton.style.display = "inline-block";
    }
}

// Función para encriptar el texto ingresado
function encriptar() {
    let texto = document.getElementById('inputTexto').value.toLowerCase(); // Convertir todo a minúsculas
    let outputElemento = document.getElementById('outputTexto'); // Elemento de salida de texto

    if (texto === "") {
        asignarTextoElemento('#outputTexto', "Ningún mensaje fue encontrado");
        toggleElements(true);
    } else {
        // Encriptación con reglas especificadas, solo letras minúsculas sin acentos ni caracteres especiales
        let textoEncriptado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        asignarTextoElemento('#outputTexto', textoEncriptado);
        toggleElements(false);
    }
}

// Función para desencriptar el texto
function desencriptar() {
    let textoEncriptado = document.getElementById('inputTexto').value.toLowerCase(); // Convertir todo a minúsculas
    let outputElemento = document.getElementById('outputTexto'); // Elemento de salida de texto

    if (textoEncriptado === "") {
        asignarTextoElemento('#outputTexto', "Ningún mensaje fue encontrado");
        toggleElements(true);
    } else {
        // Desencriptación según las reglas especificadas
        let texto = textoEncriptado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        asignarTextoElemento('#outputTexto', texto);
        toggleElements(false);
    }
}

// Función para copiar el texto encriptado
function copiarTexto() {
    let texto = document.getElementById('outputTexto').innerText; // Obtener el texto de salida
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
