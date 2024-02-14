/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
export { };

// ===> Exemple 01 [Uso do switch e case]

let flor = 'tulipa';

switch (flor) {
    case 'rosa':
        console.log('Rosas são vermelhas');
        break;
    case 'violeta':
        console.log('Tulipas são azuis');
        break;

    case 'tulipa':
        console.log('Tulipas são brancas');
        break;
    default:
        console.log('Por favor, selecione uma outra flor!');
        break;
}

// ===> Exemple 02 [Uso do switch e case]

let diaSem = 5;

switch (diaSem) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('Este não é um dia da semana!');
        break;
}