/* eslint-disable prettier/prettier */

export { };

// ===> Exemple 01 [Type Object]
const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Campos Fonseca',
    idade: 15,
    funcao: 'Software Developer'
};

console.log(pessoa);

// ===> Exemple 02 [Type Object - Object com parâmetros de funções]
function onboarding01(funcionario: { nome: string }){
    return 'Seja bem-vindo ' + funcionario.nome
}

console.log(onboarding01({nome: 'Bruno Campos Fonseca'}))

// ===> Exemple 03 [Type Object - Object nomeados]
interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa: Pessoa){
    return (
        'Seja bem-vindo ' +
        pessoa.nome + 
        ' Sua função aqui na empresa será ' + 
        pessoa.funcao +
        '.'
    );
}

console.log(onboarding02({nome: "Bruno Campos Fonseca", funcao: "Software Developer"}))

// ===> Exemple 04 [Type Object - Object como type alias]
type Pessoa03 = {
    nome: string;
    funcao: string;
    linguagem: string;
}

function onboarding03(pessoa: Pessoa03){
    return (
        'Seja bem-vindo ' +
        pessoa.nome + 
        ' Sua função aqui na empresa será ' + 
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem + 
        '.'
    );
}

console.log(onboarding03({nome: "Bruno Campos Fonseca", funcao: "Software Developer", linguagem: "Javascript/Typescript"}))

// ===> Exemple 05 [Type Object - Usando optional no object (?)]
interface Pessoa04 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string
}

function onboarding04(pessoa: Pessoa04){
    return (
        'Seja bem-vindo ' +
        pessoa.nome + 
        ' Sua função aqui na empresa será ' + 
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem + 
        '.'
    );
}

// console.log(onboarding03({nome: "Bruno Campos Fonseca", funcao: "Software Developer", linguagem: "Javascript/Typescript"}))
console.log(onboarding04({nome: "Bruno Campos Fonseca", funcao: "Software Developer", linguagem: "Javascript/Typescript", email: 'emailteste@email.com'}))

// ===> Exemple 06 [Type Object - Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o 'readonly')]
interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email?: string
}

function onboarding05(pessoa: Pessoa05){
    return (
        'Seja bem-vindo ' +
        pessoa.nome + 
        ' Sua função aqui na empresa será ' + 
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem + 
        '.' + 
        'Seu e-mail será: ' +
        pessoa.email
    );
}

console.log(onboarding05({nome: "Bruno Campos Fonseca", funcao: "Software Developer", linguagem: "Javascript/Typescript", email: 'emailteste@email.com'}))

// ===> Exemple 07 [Type Object - tipos de extensões (Heranças)]
interface Mae {
    nome: string;
}

interface Pai {
    sobrenome: string;
}

interface Filha extends Mae, Pai {
    idade: number;
}

const filha: Filha = {
    nome: 'Campos Fonseca',
    sobrenome: 'Campos Fonseca',
    idade: 15,
}

console.log(filha)

// ===> Exemple 08 [Type Object - Tipos de interseções]
interface Cachorro {
    tipo: string;
}

interface Gato {
    tipo: string;
}

type Animal = Cachorro & Gato;

// ===> Exemple 09 [Type Object - Generic Objects]
type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: 'Bruno Campos Fonseca',
    email: 'algumacoisa@email.com'
}

const admin: Admin = {
    nome: 'Bruno Campos Fonseca',
    email: 'algumacoisa@email.com',
    admin: true
}

function acessarSistema<T>(usuario: T): T{
    return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));

// function acessarSistema(usuario: Usuario): Usuario{
//     return usuario;
// }

// console.log(acessarSistema(usuario));