"use strict";
exports.__esModule = true;
// ===> Exemple 01 [Rest parameters]
function somarNumeros() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    var total = 0;
    numeros.forEach(function (numero) { return (total += numero); });
    return total;
}
console.log(somarNumeros(30, 20));
console.log(somarNumeros(40, 50, 60, 70));
// ===> Exemple 02 [Rest parameters]
function listarFrutas(frases) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    return frases + ' ' + frutas.join(', ');
}
console.log(listarFrutas('Bruno, você precisa ir na feira e comprar:', 'banana', 'pêra', 'maçã', 'abacate', 'limão'));
// ===> Exemple 03 [Rest parameters]
var Produtos = /** @class */ (function () {
    function Produtos() {
    }
    Produtos.prototype.exibirProdutos = function () {
        var produtos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            produtos[_i] = arguments[_i];
        }
        for (var _a = 0, produtos_1 = produtos; _a < produtos_1.length; _a++) {
            var produto = produtos_1[_a];
            console.log(produto);
        }
    };
    return Produtos;
}());
var departamentoInformatica = new Produtos();
console.log('Todos os produtos do departamento de informatica disponível no estoque: ');
departamentoInformatica.exibirProdutos('Mouse', 'Notebook', 'USB', 'Monitor', 'Teclado', 'WebCam');
