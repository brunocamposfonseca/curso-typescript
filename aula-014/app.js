"use strict";
/* eslint-disable prettier/prettier */
exports.__esModule = true;
// ===> Exemple 01 [Type Object]
var pessoa = {
    nome: 'Bruno',
    sobrenome: 'Campos Fonseca',
    idade: 15,
    funcao: 'Software Developer'
};
console.log(pessoa);
// ===> Exemple 02 [Type Object - Object com parâmetros de funções]
function onboarding01(funcionario) {
    return 'Seja bem-vindo ' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Bruno Campos Fonseca' }));
function onboarding02(pessoa) {
    return ('Seja bem-vindo ' +
        pessoa.nome +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.');
}
console.log(onboarding02({ nome: "Bruno Campos Fonseca", funcao: "Software Developer" }));
function onboarding03(pessoa) {
    return ('Seja bem-vindo ' +
        pessoa.nome +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding03({ nome: "Bruno Campos Fonseca", funcao: "Software Developer", linguagem: "Javascript/Typescript" }));
function onboarding04(pessoa) {
    return ('Seja bem-vindo ' +
        pessoa.nome +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
// console.log(onboarding03({nome: "Bruno Campos Fonseca", funcao: "Software Developer", linguagem: "Javascript/Typescript"}))
console.log(onboarding04({ nome: "Bruno Campos Fonseca", funcao: "Software Developer", linguagem: "Javascript/Typescript", email: 'emailteste@email.com' }));
function onboarding05(pessoa) {
    return ('Seja bem-vindo ' +
        pessoa.nome +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.' +
        'Seu e-mail será: ' +
        pessoa.email);
}
console.log(onboarding05({ nome: "Bruno Campos Fonseca", funcao: "Software Developer", linguagem: "Javascript/Typescript", email: 'emailteste@email.com' }));
var filha = {
    nome: 'Campos Fonseca',
    sobrenome: 'Campos Fonseca',
    idade: 15
};
console.log(filha);
// ===> Exemple 09 [Type Object - Generic Objects]
