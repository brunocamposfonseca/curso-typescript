// ===> Exemple 01 [Uso do while]
var contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
// ===> Exemple 02 [Uso do while]
var numero = 1;
while (numero <= 20) {
    if (numero % 5 == 0) {
        console.log('O primeiro número múltiplo de 5 entr 1 a 20 é: ', numero);
        break;
    }
    numero++;
}
// ===> Exemple 03 [Uso do while]
var contadorUsuario = 0;
var usuario = ['Bruno', 'José', 'Matheus'];
while (usuario[contadorUsuario]) {
    console.log('Usuário: ', usuario[contadorUsuario]);
    contadorUsuario++;
}
// ===> Exemple 04 [Uso do do e while]
var contador_01 = 0;
do {
    console.log(contador_01);
    contador_01++;
} while (contador_01 < 5);
