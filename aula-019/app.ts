// ===> Exemple 01 [Function]
function somarNumeros(n1: number, n2: number): number { // Quando não colocamos o tipo do retorno, otypescript já coloca automaticamente
    return n1 + n2;
}

const resultado = somarNumeros(50, 50);
console.log(resultado);

// ===> Exemple 02 [Função anônima]
const saudar = function(mensagem: string){
    return mensagem;
}

console.log(saudar('Olá mundo!'))

// ===> Exemple 03 [Arrow function]
const comprimentos = (mensagem: string) => {
    return mensagem;
}

console.log(comprimentos('Olá mundo!'))

// ===> Exemple 04 [Function constructor]
const saudar_01 = new Function('mensagem', 'return "Fala " + mensagem');
console.log(saudar_01('Olá galera!'))