// ===> Exemple 01 [Type Enum - Tipo Number]
var Languages;
(function (Languages) {
    Languages[Languages["Portuguese"] = 0] = "Portuguese";
    Languages[Languages["Spanish"] = 1] = "Spanish";
    Languages[Languages["English"] = 2] = "English";
    Languages[Languages["French"] = 3] = "French";
})(Languages || (Languages = {}));
console.log(Languages);
// ===> Exemple 01 [Type Enum - Tipo String (Não aconselhado)]
var Days;
(function (Days) {
    Days["Segunda"] = "SEG";
    Days["Terca"] = "TER";
    Days["Quarta"] = "QUA";
    Days["Quinta"] = "QUI";
    Days["Sexta"] = "SEX";
    Days["Sabado"] = "SAB";
    Days["Domingo"] = "DOM";
})(Days || (Days = {}));
console.log(Days.Segunda);
function food(c) {
    return "O prato de n\u00FAmero ".concat(c, " \u00E9 uma comida muito apetitosa!");
}
console.log(food(2 /* Food.Pizza */));
