// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma (una parola che si legge allo stesso modo anche da destra versi sinistra

// chiedo all' utente di inserire una parola
let parola = prompt("Inserisci una parola");








// creo condizione per verificare se la parola è palindroma confrontando la parola inserita dall'utente con la parola con lettere invertite  dalla funzione 

if (palindromCeck(parola) === parola) {
    console.log("palindroma");
}else{
    console.log("non è palindoma");
}
// creo funzione con metodo reverse 
function palindromCeck(word) {
    // creo variabile con (split:suddivide il testo in sottostringhe,mettendo gli apici tra le parentesi in modo da ottenere un array contenente elementi diversi composti da ogni lettera della parola inserita )e quindi(reverse:mi inverte l'ordine delle stringhe all'interno dell'array) e ( join:per riconvertire le lettere in una stringa).
    var parolaInversa = word.split('').reverse('').join('');

    return parolaInversa

}