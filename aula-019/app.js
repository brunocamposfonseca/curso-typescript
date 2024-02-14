// ===> Exemple 01 [Function]
function somarNumeros(n1, n2) {
    return n1 + n2;
}
var resultado = somarNumeros(50, 50);
console.log(resultado);
// ===> Exemple 02 [Função anônima]
var saudar = function (mensagem) {
    return mensagem;
};
console.log(saudar('Olá mundo!'));
// ===> Exemple 03 [Arrow function]
var comprimentos = function (mensagem) {
    return mensagem;
};
console.log(comprimentos('Olá mundo!'));
// ===> Exemple 04 [Function constructor]
var saudar_01 = new Function('mensagem', 'return "Fala " + mensagem');
console.log(saudar_01('Olá galera!'));
