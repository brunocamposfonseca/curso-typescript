/* eslint-disable prettier/prettier */
export { };

// Exemple 01 [Uso do if]
const numeroMax = 100;
let contador = 100;

if (contador < numeroMax) {
    contador++
}

console.log(contador);

// Exemple 02 [Uso do if]
const permicaoIdade01 = 18;

if(permicaoIdade01 >= 18){
    console.log('Você está hápita a dirigir!')
}

console.log('Sua idade atual: ' + permicaoIdade01);

// Exemple 02 [Uso do if e else]
const permicaoIdade02 = 16;

if(permicaoIdade02 >= 18){
    console.log('Você está hápto para dirigir!')
} else {
    console.log('Você não está hápto para dirigir.')
}

console.log('Sua idade atual: ' + permicaoIdade02);

// Exemple 02 [Uso do if... else if... if]
let desconto: number;
const valor = 14;
if(valor > 0 && valor <= 5){
    desconto = 5;
} else if (valor > 5 && valor <= 10){
    desconto = 10;
} else {
    desconto = 15;
}

console.log(`Você teve um desconto de: ${desconto}% desconto`);

// Exemple 02 [Uso do if e else (Operadores ternários)]
// const idadeVotacao = 18;

// if(idadeVotacao >= 18){
//     console.log('Você tem idade para votar!')
// } else {
//     console.log('Você não tem idade para votar.')
// }

const idadeVotacao = 18;

const podeVotar = (idadeVotacao >= 18 ? console.log('Você tem idade para votar!') : console.log('Você não tem idade para votar.'))

console.log(podeVotar)