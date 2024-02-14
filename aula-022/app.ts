export { };

// ===> Exemple 01 [Rest parameters]
function somarNumeros(...numeros: number[]): number{
    let total = 0;
    numeros.forEach((numero) => (total += numero));

    return total;
}

console.log(somarNumeros(30, 20));
console.log(somarNumeros(40, 50, 60, 70));

// ===> Exemple 02 [Rest parameters]
function listarFrutas(frases: string, ...frutas: string[]){
    return frases + ' ' + frutas.join(', ');
}

console.log(listarFrutas('Bruno, você precisa ir na feira e comprar:', 'banana', 'pêra', 'maçã', 'abacate', 'limão'));


// ===> Exemple 03 [Rest parameters]
class Produtos{
    public exibirProdutos(...produtos: string[]):void {
        for(const produto of produtos){
            console.log(produto);
        }
    }
}

const departamentoInformatica: Produtos = new Produtos();
console.log('Todos os produtos do departamento de informatica disponível no estoque: ',)

departamentoInformatica.exibirProdutos(
    'Mouse',
    'Notebook',
    'USB',
    'Monitor',
    'Teclado',
    'WebCam',
);