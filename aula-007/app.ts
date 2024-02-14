// ===> Exemple 01 [Type Tuplas]
let people: [string, string, number];
people = ['Bruno Campos Fonseca', 'Software engennirie', 15];
//people = [ 15, 'Bruno Campos Fonseca', 'Software engennirie']; - Sintax error
console.log(people[1]);

// ===> Exemple 03 [Type Tuplas - com labels]
let people1: [name: string, position: string, age: number];
people1 = ['Bruno Campos Fonseca', 'Software engennirie', 15];
console.log(people1);

// ===> Exemple 04 [Type Tuplas - Spread Operator]
let fruit: [string, ...string[]] = ['Pineapple', 'Avocado', 'Watermelon', 'Strawberry', 'Mango'];
console.log(...fruit);

// ===> Exemple 05 [Type Tuplas - Lista Heterogênea]
let fruitList: [number, boolean, ...string[]] = [5, true, ...fruit];
console.log(fruitList)

// ===> Exemple 06 [Type Tuplas - Funções com tuplas]
function listarPessoas(names: string[], ages: number[]){
    return [...names, ...ages]
}

let result = listarPessoas(['Bruno', 'Luke', 'Lorena', 'Lucas'], [15, 4, 6, 12]);

// ===> Exemple 07 [Type Tuplas - Spread Operator numa função]

type Name =
    | [firstName: string, lastName: string]
    | [firstName: string, middleName:string, lastName: string]
function createPeople(...name: Name){
    return [...name];
}

console.log(createPeople('Bruno', 'Fonseca'));
console.log(createPeople('Bruno', 'Campos', 'Fonseca'))