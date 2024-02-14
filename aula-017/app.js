// ===> Exemple 01 [Uso do for]
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// ===> Exemple 02 [Uso do for of]
var arrayNumeros01 = [10, 20, 30, 40, 50];
for (var _i = 0, arrayNumeros01_1 = arrayNumeros01; _i < arrayNumeros01_1.length; _i++) {
    var i = arrayNumeros01_1[_i];
    console.log(i);
}
// ===> Exemple 03 [Uso do for in]
var arrayNumeros02 = [50, 40, 30, 20, 10];
for (var _a = 0, arrayNumeros02_1 = arrayNumeros02; _a < arrayNumeros02_1.length; _a++) {
    var i = arrayNumeros02_1[_a];
    console.log(i);
}
var ordemNumerica = arrayNumeros02.sort();
console.log(ordemNumerica);
