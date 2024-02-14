// ===> Exemple 01
var boo1 = false;
var boo2 = true;
console.log(boo1);
console.log(boo2);
// ===> Exemple 02
var number1 = 7;
var isAproved = false;
var aproved = function () {
    if (isAproved) {
        console.log("Aproved");
    }
};
var notAproved = function () {
    if (!isAproved) {
        console.log("Not Aproved");
    }
};
function aprovedStudent() {
    if (number1 <= 7) {
        isAproved = true;
        aproved();
    }
    else {
        notAproved();
    }
}
console.log(aprovedStudent());
