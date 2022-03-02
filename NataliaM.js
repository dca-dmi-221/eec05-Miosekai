'use strict'
// 1 Punto
/* Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/
// foreach
let testWord = "esternocleidomastoideo";

function reemplazarLetras(word) {
    const palabraLarga = word.length;
    const indice = [];
    for (let index = 0; index < palabraLarga; index++) {
        let esIndex = true;

        while (esIndex) {
            let random = Math.random() * (palabraLarga - 1);
            let randomIndex = Math.round(random);
            if (indice.includes(randomIndex)) {
                random = Math.random() * (palabraLarga - 1);
                randomIndex = Math.round(random);
            } else {
                indice.push(randomIndex)
                esIndex = false;
            }
        }

        console.log(word[indice[index]])

    }

    console.log(indice)
}

reemplazarLetras("esternocleidomastoideo")


// punto 2
/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testTargetWordD = "Meneo";

let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

function normalizeWord(word) {
    return word.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace("0", "o").toUpperCase();
}

function buscaPalabraEnLista(word, wordList) {
    let currentWord = word;
    let normalizar = normalizeWord(currentWord);
    const normalizarLista = [];
    for (let index = 0; index < wordList.length; index++) {
        normalizarLista.push(normalizeWord(wordList[index]))
    }


    console.log(normalizarLista.includes(normalizar), `palabra: ${normalizar}`, normalizarLista)
    // console.log(newWord)
}

buscaPalabraEnLista(testTargetWordB, testWordsList)
buscaPalabraEnLista(testTargetWordA, testWordsList)
buscaPalabraEnLista(testTargetWordC, testWordsList)
buscaPalabraEnLista(testTargetWordD, testWordsList)

// punto 3
/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    // :)
}

// punto 4
/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {

    console.log(word.toLowerCase())
    let palabraPalindromo = word.toLowerCase().split("").reserve().join("");
    if (palabraPalindromo === word.toLowerCase()) {

        console.log("la palabra" + word + "es palindroma")

    } else {

        console.log("la palabra" + word + "bo es palindroma")
    }
}

palindromeVerifier(onVerificationWordA)
palindromeVerifier(onVerificationWordB)
palindromeVerifier(onVerificationWordC)
palindromeVerifier(onVerificationWordD)

// 5
/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list: ["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}

///// Counter[cantidadvocales, cantidadletras] 
function lettersCounter(objectContainer) {
    let vowels = "aeiou";
    let counter = [0, 0];
    for (let i = 0; i < objectContainer.list.length; i++) {
        let word = objectContainer.list[i];
        for (let j = 0; j < word.length; j++) {
            if (vowels.includes(word.charAt(j).toLowerCase())) {
                counter[0] += 1;
            } else {
                counter[1] += 1;
            }
        }
    }
    console.log(counter);
}
lettersCounter(containerTestObject);

//6
//*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿", "cómo", "estás", "?"];
let wordArrayB = ["te", "ves", "igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
    let arrayJ = listA.concat(listB);
    console.log(arrayJ);
}
arrayJoiner(wordArrayA, wordArrayB);

// 7
/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana", "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
    // :)
}

// 8
/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA: ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB: ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {

}

console.log(vocalsRemoverFromObject(testObjMultiContainer));

// 9
/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    // :)
}


// punto 10
/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor", "firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    // :)
}