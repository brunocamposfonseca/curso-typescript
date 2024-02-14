// ===> Exemple 01 [Type Never - Throw Exception]
function error(message: string):never{
    throw new Error(message);
}

console.log(error('Erro de mensagem - 01'))

// ===> Exemple 02 [Type Never - Never inferido automaticamente]

function rejectMessage(){
    return error('Erro de mensagem - 02')
}

console.log(rejectMessage());

// ===> Exemple 03 [Type Never - Função que contém loop infinito retorna o tipo 'never']
// !!! NÃO EXECUTE ESTE CÓDIGO !!!

// const loop = () => {
//     // eslint-disable-next-line no-constant-condition
//     while(true){
//         console.log('Olá developers!');
//     }
// };

// console.log(loop())

// ===> Exemple 04 [Type Never e Void - Diferença entre o 'never' vs 'void']
// !!! NÃO EXECUTE ESTE CÓDIGO !!!

// const anyThingVoid:void = null;
// const anyThingNever: never = null;

// console.log(anyThingVoid);
// console.log(anyThingNever);