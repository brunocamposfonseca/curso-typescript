// ===> Exemple 01 [Uso do for]
for(let i = 0; i < 10; i++){
    console.log(i);
}

// ===> Exemple 02 [Uso do for of]
const arrayNumeros01 = [10, 20, 30, 40, 50]

for(const i of arrayNumeros01){
    console.log(i)
}

// ===> Exemple 03 [Uso do for in]
const arrayNumeros02 = [50, 40, 30, 20, 10]

for(const i of arrayNumeros02){
    console.log(i)
}

const ordemNumerica: number[] = arrayNumeros02.sort();
console.log(ordemNumerica)