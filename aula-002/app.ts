// ===> Variáveis [Type Annotations]
let completName: string = "Bruno Campos Fonseca"
console.log(completName)

// ===> Arrays [Type Annotations]
let animals: string[] = ['Elephant', 'Lion', 'Dog', 'Cat']
console.log(animals)

// ===> Object [Type Annotations]
let car: {
    name: string,
    year: number,
    price: number
}

car = { name: 'Toyota Yaris Sedan', year: 2019, price: 40.000 }
console.log(car)

// ===> Functions [Type Annotations]
function multipleNumber(num1: number, num2: number){
    return num1 * num2
}

console.log(multipleNumber(10, 30))