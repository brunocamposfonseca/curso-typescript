var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ===> Exemple 001
var fruits = ['Pineapple', 'Avocado', 'Watermelon', 'Strawberry', 'Mango'];
var fruits1 = ['Pineapple', 'Avocado', 'Watermelon', 'Strawberry', 'Mango'];
var years = [2013, 2014, 1015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,];
console.log("Frutas: ".concat(fruits, " - ").concat(fruits[2]));
console.log("Frutas: ".concat(fruits1, " - ").concat(fruits1[4]));
console.log("Anos: ".concat(years, " - ").concat(years[10]));
console.log('*--------------------------------*');
console.log(fruits.length);
years.push(2024);
console.log(years[11]);
console.log('*--------------------------------*');
// ===> Exemple 002
var numbersList = [0, 1, 2, 3, 4, 5];
numbersList = __spreadArray(__spreadArray([], numbersList, true), [6, 7, 8, 9, 10], false);
console.log(numbersList);
console.log('*--------------------------------*');
// ===> Exemple 003
var languagesArray = new Array('Javascript', 'Python', 'PHP', 'C#', 'Ruby');
function functionLanguages(languages) {
    for (var i = 0; i < languages.length; i++) {
        console.log(languagesArray[i]);
    }
}
functionLanguages(languagesArray);
