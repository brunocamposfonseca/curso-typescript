/* eslint-disable prefer-const */

// ===> Exemple 01 [Type Number]
let num1: number = 14.0; // Number
let num2: number = 0x37CF; // Hexadecimal
let num3: number = 0o377; // Octal
let num4: number = 0b111001; // Binary

console.log(typeof(num1) + " - " + "Número : " + num1)
console.log(typeof(num2) + " - " + "Hexadecimal : " + num2)
console.log(typeof(num3) + " - " + "Octal : " + num3)
console.log(typeof(num4) + " - " + "Binário : " + num4)

// ===> Exemple 01 [Type Bigint(2^53)]

let big1: bigint = 9007199254740991n; // Number
let big2: bigint = 0x20000000000003n; // Hexadecimal
let big3: bigint = 0o400000000000000003n; // Octal
let big4: bigint = 0b100000000000000000000000000000000000000000000000000011n; // Binary

console.log(big1)
console.log(big2)
console.log(big3)
console.log(big4)