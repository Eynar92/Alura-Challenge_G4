// Definicion de variables para los elementos del DOM

var outputTitles = document.getElementById("output_titles");
var encryptTxtContainer = document.getElementById("encryptTxt_container");

var inputTxt = document.getElementById("input_txt");
var outputTxt = document.getElementById("encryptTxt_show");

var lowerCase = document.getElementById("input_restriction");

var encryptBtn = document.getElementById("encrypter");
var decryptBtn = document.getElementById("decrypter");
var copyBtn = document.getElementById("copy")

// ==== Objeto con los valores para la encriptacion ====

var keys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'       
}

// ==== VALIDACION DE CARACTERES ====

function validarMinusculas(){
    let regex = /^[a-zñ\s\d]+$/;

    if(inputTxt.value === '') {
        lowerCase.classList.remove('error');
        lowerCase.classList.remove('correct');
        lowerCase.style.animation = '';

    } else if (!(regex.test(inputTxt.value))){
        lowerCase.classList.add('error');
        lowerCase.style.animation = 'shake 0.8s ease both';

    } else {
        lowerCase.classList.remove('error');
        lowerCase.classList.add('correct');
        lowerCase.style.animation = '';
    }
    return regex.test(inputTxt.value) ? inputTxt : '';
};


function encryptText() {
    var text = inputTxt.value;
    for (const [key, value] of Object.entries(keys)) {
        text = text.replace(new RegExp(key, "g"), value);
    }
    stateOne();
    outputTxt.value = text;
}

function decryptText() {
    var text = inputTxt.value;
    for (const [key, value] of Object.entries(keys)) {
        text = text.replace(new RegExp(value, 'g'), key);
    }
    outputTxt.value = text;
}

function stateOne() {
    outputTitles.style.display = 'none';
    encryptTxtContainer.style.display = 'flex';
    encryptTxtContainer.style.animation = 'slideDownSecond 2s ease';
}

function copy() {
    const text = outputTxt.value;
    navigator.clipboard.writeText(text);
}


inputTxt.addEventListener('input', validarMinusculas);
encryptBtn.addEventListener('click', encryptText);
decryptBtn.addEventListener('click', decryptText);
copyBtn.addEventListener('click', copy);