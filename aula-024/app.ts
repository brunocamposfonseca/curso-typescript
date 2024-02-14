export { };

// Exemple 01 [Type class - Herança de classes]
class User{
    private name: string;
    private age: number;
    public descriptionUser: string;

    constructor(name: string, age: number, desc: string){
        this.name = name;
        this.age = age;
        this.descriptionUser = desc;
    }
}

class Developer extends User{
    public languages: string[];

    constructor(name: string, age: number, desc: string, languages: string[]){
        super(name, age, desc);
        this.languages = languages;
    }
}

const user_1 = new Developer('Bruno Campos Fonseca', 15, 'lorem ipsun anything',['javascript', 'php', 'react']);
console.log(user_1);

// Exemple 02 [Type readonly]
class Funcionario_1{
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date){
        this.dataNascimento = dataNascimento;
    }
}

const funcionario_1 = new Funcionario_1(new Date(2008, 1, 30));
console.log(funcionario_1)



// Exemple 03 [Type readonly]
class Funcionario_2{
    constructor(readonly dataNascimento: Date){
        this.dataNascimento = dataNascimento;
    }
}

// Exemple 04 [Type readonly]
class Funcionario_3{
    nome: string;
    readonly codigoFuncionario: number;

    constructor(nome: string, codigo: number){
        this.nome = nome;
        this.codigoFuncionario = codigo;
    }
}

const func = new Funcionario_3('Bruno Campos Fonseca', 101918);
console.log(func)

// Exemple 05 [Type readonly - Interface]

interface IFuncionario {
    codigoFuncionario: number;
    nomeFuncionario: string;
}

const funcionario_4: Readonly<IFuncionario> = {
    codigoFuncionario: 101918,
    nomeFuncionario: 'Bruno Campos Fonseca',
}

// funcionario_4.codigoFuncionario = 202928;
// funcionario_4.nomeFuncionario = 'Bruno';

const funcionario_5: IFuncionario= {
    codigoFuncionario: 101918,
    nomeFuncionario: 'Bruno Campos Fonseca',
}

funcionario_5.codigoFuncionario = 202928;
funcionario_5.nomeFuncionario = 'Bruno';
console.log(funcionario_5)