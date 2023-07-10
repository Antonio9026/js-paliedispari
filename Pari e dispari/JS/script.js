// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// selziono elemento input del numero inserito da utente
const inputNumberUtente = document.querySelector("[name='Number_input']")

// seleziono opzioni pari e dispari
const pariDispari = document.getElementById("pari-dispari")

// buttons
const genera = document.querySelector(".genera")
const annulla = document.querySelector(".annulla")

genera.addEventListener("click", function () {

    // genero variabile per value input utente 
const numberInput = inputNumberUtente.value;

// stampo il numero seleionato da utente in pagina
document.getElementById("nueroin").innerHTML = "Il numero inserito é: " + numberInput;

// genero value pari e dispari
// let inputPariDispari = pariDispari.value; 
// console.log(inputPariDispari);


// seleziono  numero Pc richiamando la funzione numberRandomPc
const pcNum = document.getElementById("pc-num-container")
// salvo funzione in una variabile
const pcFunctionNum = numberRandomPc(5,1)
// stampo in HTML 
pcNum.innerHTML = "Il numero inserito dal PC é: " + pcFunctionNum

// evenOddNumbersCondition(pcFunctionNum) 


const somma = parseInt(numberInput) +  pcFunctionNum
console.log(somma);

// stabliscisco se la somma dei due numeri è pari o dispari invocando la funzione evenOddNumbersCondition
 let sommaPariDispari = evenOddNumbersCondition(somma)

// creo condizione per stabilire chi ha vinto
if (pariDispari.value === "pari" && sommaPariDispari === true) {
    console.log("Hai vintooooooo");
}else if(pariDispari.value === "dispari"  && sommaPariDispari === false){
    console.log("Hai vintooooooo");
}else{
    console.log("ha vinto il pc");
}


});





// creo funzione numeri random per pc 
function numberRandomPc(max,min) {
  
    const pcRandomNum = Math.floor(Math.random()*(max - min + 1) + min)
return pcRandomNum
}

// creo funzione per stabilire pe stabilire se un numero è pari o dispari
function evenOddNumbersCondition(evenOdd){

if (evenOdd % 2 === 0) {
   return true
   
}else{
   return false
   
}

}