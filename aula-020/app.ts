/* eslint-disable prefer-const */

// ===> Exemple 01 [Optional parameters (? - Utilizado para informar que um parâmetro não é essencial]
const informarDadosPessoa = (idPessoa: number, nome: string, email?: string) => {
    console.log('Id Funcionário: ', idPessoa, 'Nome: ', nome);
    if(email != undefined) console.log('E-mail: ', email);
}

informarDadosPessoa(101918, 'Bruno Campos Fonseca');
informarDadosPessoa(201938, 'José firmino', 'emailteste@email.com');

// ===> Exemple 02 [Optional parameters]
function mensagemLog(mensage: string, usuarioId?: number){
    const horaLog = new Date().toLocaleDateString();
    console.log(horaLog, mensage, usuarioId || 'Usuário(a) não conectado(a)');
}

mensagemLog('Atualizar página,');
mensagemLog('Usuário(a) logado(a) com sucesso:', 101918);

// ===> Exemple 03 [Optional parameters]
type Pessoa = {
    idFuncionario: number;
    nome: string;
    idade?: number;
    email?: string;
};

let pessoa: Pessoa;

pessoa = {
    idFuncionario: 101918,
    nome: 'Bruno Campos Fonseca',
}

console.log(pessoa)