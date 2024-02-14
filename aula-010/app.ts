// ===> Exemple 01 [Type Unknown]
let valueVar: unknown;

valueVar = true;
valueVar = 123;
valueVar = [];
valueVar = 'Oi! Tudo bem?';

console.log(valueVar)

// ===> Exemple 02 [Type Unknown - Erro ao atribuir um valor do tipo 'unknown' a outros tipos]
// let value: unknown;

// let value1: boolean = value;
// let value2: number = value;
// let value3: any[] = value;
// let value4: string = value;

// ===> Exemple 02 [Type Unknown - Diferença entre 'any' vs 'unknown']
let anyThingAny: any;
let anyThingUnknown: unknown;

console.log(anyThingAny.toFixed(2));
// console.log(anyThingUnknown.toFixed(2))

if(typeof anyThingUnknown === 'number'){
    console.log(anyThingUnknown.toFixed(2))
}