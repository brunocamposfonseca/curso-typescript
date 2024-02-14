"use strict";
exports.__esModule = true;
// Exemple 01 [Uso do if]
var numeroMax = 100;
var contador = 100;
if (contador < numeroMax) {
    contador++;
}
console.log(contador);
// Exemple 02 [Uso do if]
var permicaoIdade01 = 18;
if (permicaoIdade01 >= 18) {
    console.log('Você está hápita a dirigir!');
}
console.log('Sua idade atual: ' + permicaoIdade01);
// Exemple 02 [Uso do if e else]
var permicaoIdade02 = 16;
if (permicaoIdade02 >= 18) {
    console.log('Você está hápto para dirigir!');
}
else {
    console.log('Você não está hápto para dirigir.');
}
console.log('Sua idade atual: ' + permicaoIdade02);
// Exemple 02 [Uso do if... else if... if]
var desconto;
var valor = 14;
if (valor > 0 && valor <= 5) {
    desconto = 5;
}
else if (valor > 5 && valor <= 10) {
    desconto = 10;
}
else {
    desconto = 15;
}
console.log("Voc\u00EA teve um desconto de: ".concat(desconto, "% desconto"));
// Exemple 02 [Uso do if e else (Operadores ternários)]
// const idadeVotacao = 18;
// if(idadeVotacao >= 18){
//     console.log('Você tem idade para votar!')
// } else {
//     console.log('Você não tem idade para votar.')
// }
var idadeVotacao = 18;
var podeVotar = (idadeVotacao >= 18 ? console.log('Você tem idade para votar!') : console.log('Você não tem idade para votar.'));
console.log(podeVotar);
