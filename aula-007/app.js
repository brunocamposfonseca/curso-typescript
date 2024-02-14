var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ===> Exemple 01 [Type Tuplas]
var people;
people = ['Bruno Campos Fonseca', 'Software engennirie', 15];
//people = [ 15, 'Bruno Campos Fonseca', 'Software engennirie']; - Sintax error
console.log(people[1]);
// ===> Exemple 03 [Type Tuplas - com labels]
var people1;
people1 = ['Bruno Campos Fonseca', 'Software engennirie', 15];
console.log(people1);
// ===> Exemple 04 [Type Tuplas - Spread Operator]
var fruit = ['Pineapple', 'Avocado', 'Watermelon', 'Strawberry', 'Mango'];
console.log.apply(console, fruit);
// ===> Exemple 05 [Type Tuplas - Lista Heterogênea]
var fruitList = __spreadArray([5, true], fruit, true);
console.log(fruitList);
// ===> Exemple 06 [Type Tuplas - Funções com tuplas]
function listarPessoas(names, ages) {
    return __spreadArray(__spreadArray([], names, true), ages, true);
}
var result = listarPessoas(['Bruno', 'Luke', 'Lorena', 'Lucas'], [15, 4, 6, 12]);
function createPeople() {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    return __spreadArray([], name, true);
}
console.log(createPeople('Bruno', 'Fonseca'));
console.log(createPeople('Bruno', 'Campos', 'Fonseca'));
