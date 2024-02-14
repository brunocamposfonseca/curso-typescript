export { };

// ===> Exemple 01 [Default parameters]
function descontoCompra(preco: number, desconto = 0.08) {
    return preco * (1 - desconto);
}

console.log(descontoCompra(100))

// ===> Exemple 02 [Default parameters]
function exibirMensage(nome: string, saudar = 'Hello world') {
    return saudar + ' ' + nome + '!';
}

console.log(exibirMensage( 'Bruno', 'Olá,'));
console.log(exibirMensage( 'Bruno'));

// ===> Exemple 03 [Default parameters]
function exibirNome(nome: string, sobrenome = 'Campos Fonseca'){
    return nome + '' + sobrenome;
}

const resultado_1 = exibirNome('Bruno');
console.log(resultado_1)