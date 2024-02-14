export { };

// ===> Exemple 01 [Classes]
class Pessoa{
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    mensagemNome(): string{
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa = new Pessoa('Bruno', 'Campos Fonseca');
console.log(pessoa.mensagemNome())

// ===> Exemple 02 [Classes sem constructor]
class Estudante{
    codigoEstudante: number;
    nomeEstudante: string;
}

const estudante = new Estudante();

estudante.codigoEstudante = 101918;
estudante.nomeEstudante = 'Bruno Campos Fonseca';

console.log('Código do estudante: ' + estudante.codigoEstudante);
console.log('Nome do estudante: ' + estudante.nomeEstudante)

// ===> Exemple 03 [Classes com constructor]
class Estudante_1{
    codigoEstudante: number;
    nomeEstudante: string;

    constructor(codigoEstudante: number, nomeEstudante: string){
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }

    listarEstudante(): void{
        console.log('Codigo estudante: ' + this.codigoEstudante);
        console.log('Nome estudante: ' + this.nomeEstudante);
    }
}

const estudante01 = new Estudante_1(101918, 'Bruno Campos Fonseca');
const estudante02 = new Estudante_1(201917, 'José benedito');

console.log(estudante01.listarEstudante());
console.log(estudante02.listarEstudante());