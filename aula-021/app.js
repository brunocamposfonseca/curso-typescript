"use strict";
exports.__esModule = true;
// ===> Exemple 01 [Default parameters]
function descontoCompra(preco, desconto) {
    if (desconto === void 0) { desconto = 0.08; }
    return preco * (1 - desconto);
}
console.log(descontoCompra(100));
// ===> Exemple 02 [Default parameters]
function exibirMensage(nome, saudar) {
    if (saudar === void 0) { saudar = 'Hello world'; }
    return saudar + ' ' + nome + '!';
}
console.log(exibirMensage('Bruno', 'Olá,'));
console.log(exibirMensage('Bruno'));
// ===> Exemple 03 [Default parameters]
