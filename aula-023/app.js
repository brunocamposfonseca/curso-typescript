"use strict";
exports.__esModule = true;
// ===> Exemple 01 [Classes]
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    Pessoa.prototype.mensagemNome = function () {
        return "".concat(this.nome, " ").concat(this.sobrenome);
    };
    return Pessoa;
}());
var pessoa = new Pessoa('Bruno', 'Campos Fonseca');
console.log(pessoa.mensagemNome());
// ===> Exemple 02 [Classes sem constructor]
var Estudante = /** @class */ (function () {
    function Estudante() {
    }
    return Estudante;
}());
var estudante = new Estudante();
estudante.codigoEstudante = 101918;
estudante.nomeEstudante = 'Bruno Campos Fonseca';
console.log('Código do estudante: ' + estudante.codigoEstudante);
console.log('Nome do estudante: ' + estudante.nomeEstudante);
// ===> Exemple 03 [Classes com constructor]
var Estudante_1 = /** @class */ (function () {
    function Estudante_1(codigoEstudante, nomeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
    Estudante_1.prototype.listarEstudante = function () {
        console.log('Codigo estudante: ' + this.codigoEstudante);
        console.log('Nome estudante: ' + this.nomeEstudante);
    };
    return Estudante_1;
}());
var estudante01 = new Estudante_1(101918, 'Bruno Campos Fonseca');
var estudante02 = new Estudante_1(201917, 'José benedito');
console.log(estudante01.listarEstudante());
console.log(estudante02.listarEstudante());
