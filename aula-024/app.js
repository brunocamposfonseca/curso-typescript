"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Exemple 01 [Type class - Herança de classes]
var User = /** @class */ (function () {
    function User(name, age, desc) {
        this.name = name;
        this.age = age;
        this.descriptionUser = desc;
    }
    return User;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, desc, languages) {
        var _this = _super.call(this, name, age, desc) || this;
        _this.languages = languages;
        return _this;
    }
    return Developer;
}(User));
var user_1 = new Developer('Bruno Campos Fonseca', 15, 'lorem ipsun anything', ['javascript', 'php', 'react']);
console.log(user_1);
// Exemple 02 [Type readonly]
var Funcionario_1 = /** @class */ (function () {
    function Funcionario_1(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
    return Funcionario_1;
}());
var funcionario_1 = new Funcionario_1(new Date(2008, 1, 30));
// Exemple 03 [Type readonly]
var Funcionario_2 = /** @class */ (function () {
    function Funcionario_2(dataNascimento) {
        this.dataNascimento = dataNascimento;
        this.dataNascimento = dataNascimento;
    }
    return Funcionario_2;
}());
// Exemple 04 [Type readonly]
var Funcionario_3 = /** @class */ (function () {
    function Funcionario_3(nome, codigo) {
        this.nome = nome;
        this.codigoFuncionario = codigo;
    }
    return Funcionario_3;
}());
var func = new Funcionario_3('Bruno Campos Fonseca', 101918);
var funcionario_4 = {
    codigoFuncionario: 101918,
    nomeFuncionario: 'Bruno Campos Fonseca'
};
// funcionario_4.codigoFuncionario = 202928;
// funcionario_4.nomeFuncionario = 'Bruno';
var funcionario_5 = {
    codigoFuncionario: 101918,
    nomeFuncionario: 'Bruno Campos Fonseca'
};
funcionario_5.codigoFuncionario = 202928;
funcionario_5.nomeFuncionario = 'Bruno';
