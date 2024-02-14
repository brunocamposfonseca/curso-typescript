// ===> Exemple 01

let boo1: boolean = false;
let boo2: boolean = true;

console.log(boo1)
console.log(boo2)

// ===> Exemple 02

let number1: number = 7
let isAproved: boolean = false

let aproved = () => {
    if(isAproved){
        console.log("Aproved")
    }
}

let notAproved = () => {
    if(!isAproved){
        console.log("Not Aproved")
    }
}

function aprovedStudent() {
    if(number1 <= 7){
        isAproved = true;
        aproved();
    } else {
        notAproved()
    }
}

console.log(aprovedStudent())