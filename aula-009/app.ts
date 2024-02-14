// ===> Exemple 01 - [Type Any]
const a:any  = 888;
const b:any = ['Perigo'];

const c  = a + b;

console.log(c)

// ===> Exemple 02 - [Type Any - Inferido implicitamente]
const frase = 'Oi, pessoal! Tudo bem?';
console.log(frase)

// ===> Exemple 03 - [Type Any]
const formulario: { [campoFormulario: string]:any } = {
    nome: 'Bruno',
    sobrenome: 'Campos Fonseca',
    idade: 15
};

console.log(formulario)