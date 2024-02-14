// ===> Exemple 01 [Type Void]
// function logError(errorMessage:string) {
//     console.log(errorMessage);
// }
function logError(errorMessage) {
    console.log(errorMessage);
}
logError('Olá mundo!');
// ===> Exemple 02 [Type Void]
// const logError2 = (errorMessage:string):void => {
//     console.log(errorMessage);
// }
var logError2 = function (errorMessage) {
    console.log(errorMessage);
};
logError2('Olá, mundo 2!');
// ===> Exemple 03 [Type Void - Variáveis Desativando o strictNullChecks)]
var varExempleVoid;
varExempleVoid = 1;
varExempleVoid = null;
varExempleVoid = undefined;
varExempleVoid = 'Bruno';
console.log(varExempleVoid);
