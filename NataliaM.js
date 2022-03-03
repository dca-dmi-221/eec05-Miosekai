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

let words = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(word) {
    let totalDeLetras = 0;
    const sortedWords = word.sort((wordA, wordB) => {
        if (wordA.length < wordB.length) {
            return -1;
        } else if (wordA.length > wordB.length) {
            return 1;
        } else {
            return 0;
        }

    });

    sortedWords.forEach(word => totalDeLetras += word.length);
    const letras = totalDeLetras / sortedWords.length;
    return {
        palabraCorta: sortedWords[0],
        palabraLarga: sortedWords[sortedWords.length - 1],
        letras
    };

}
console.log(wordLengthClassifier(words))

// punto 4
/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
  console.log(word.toLowerCase())
  let palabraPalindroma = word.toLowerCase().split("").reverse().join("");
  if (palabraPalindroma === word.toLowerCase()){
      console.log("La palabra "+ word+ " es palindroma")
  }else{
    console.log("La palabra "+ word+ " no es palindroma")
  }
}
palindromeVerifier(onVerificationWordA);
palindromeVerifier(onVerificationWordB);
palindromeVerifier(onVerificationWordC);
palindromeVerifier(onVerificationWordD);

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
    let posiciones = [];
    for (let i = 0; i < listOfWords.length; i++) {
        if(listOfWords[i]!== wordToExplore){
            let pos = listOfWords.indexOf(listOfWords[i])
            posiciones.push(pos)
        }
        
    }
return posiciones;
}
console.log(anagramVerifier(testWordToExplore,wordsToVerify));

// 8
/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA: ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB: ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    let unirPalabras = objectMultiContainer.listA.concat(objectMultiContainer.listB)
    const resultado = []
    for (let i = 0; i < unirPalabras.length; i++) {
        const posicionActual = unirPalabras[i].split('');
        for (let index = 0; index < unirPalabras[i].length; index++) {
           if(posicionActual[index]==="a"|| posicionActual[index]==="e"||posicionActual[index]==="i"||posicionActual[index]==="o"||posicionActual[index]==="u"){
            posicionActual.splice(index,1);
           }
        }
        resultado.push(posicionActual.join(''))
    }
    console.log(resultado)
}

console.log(vocalsRemoverFromObject(testObjMultiContainer));

// 9
/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    let vowels = "aeiou";
    let array=[];
    let counter=0;
    for (let i = 0; i < words.length; i++) {
        let word=words[i];
        let wordArray=word.split("");
        for (let j = words[i].length-1; j > 0 ; j--) {
        
            if(vowels.includes(word.charAt(j))){
                wordArray[j]= "x";
                array[counter]= wordArray.join('');
                counter++;
                break;
            } 
        }
    }
    console.log(array);
}

lastVocalReplacer(someWordsToTest);


// punto 10
/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor", "firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    let reverse=false;
    let counter ={ 
        repeated: 0
    };

    for (let i = 0; i < listA.length; i++) {
        reverse=false;
        let wordA= listA[i];
        for (let j = 0; j < listB.length; j++) {
            let wordB= listB[j];

            for (let k = 0; k < wordB.length; k++) {
                if(wordA.charAt(k) == wordB.charAt((wordB.length-1)-k)){
                     reverse = true;
                }
            }
        }

        if(reverse){
            counter.repeated+=1;
        }
    }
    console.log(counter);
}

doubleListVerifier(testListA,testListB);