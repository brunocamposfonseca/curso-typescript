/* eslint-disable prefer-const */
// ===> Exemple 01 [Optional parameters (? - Utilizado para informar que um parâmetro não é essencial]
var informarDadosPessoa = function (idPessoa, nome, email) {
    console.log('Id Funcionário: ', idPessoa, 'Nome: ', nome);
    if (email != undefined)
        console.log('E-mail: ', email);
};
informarDadosPessoa(101918, 'Bruno Campos Fonseca');
informarDadosPessoa(201938, 'José firmino', 'emailteste@email.com');
// ===> Exemple 02 [Optional parameters]
function mensagemLog(mensage, usuarioId) {
    var horaLog = new Date().toLocaleDateString();
    console.log(horaLog, mensage, usuarioId || 'Usuário(a) não conectado(a)');
}
mensagemLog('Atualizar página,');
mensagemLog('Usuário(a) logado(a) com sucesso:', 101918);
var pessoa;
pessoa = {
    idFuncionario: 101918,
    nome: 'Bruno Campos Fonseca'
};
console.log(pessoa);
