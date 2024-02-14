// ===> Exemple 001
let fruits:string[] = ['Pineapple', 'Avocado', 'Watermelon', 'Strawberry', 'Mango'];
let fruits1:Array<string> = ['Pineapple', 'Avocado', 'Watermelon', 'Strawberry', 'Mango'];
let years:number[] = [2013, 2014, 1015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,];

console.log(`Frutas: ${fruits} - ${fruits[2]}`);
console.log(`Frutas: ${fruits1} - ${fruits1[4]}`);
console.log(`Anos: ${years} - ${years[10]}`);
console.log('*--------------------------------*');
console.log(fruits.length);
years.push(2024);
console.log(years[11]);
console.log('*--------------------------------*');

// ===> Exemple 002

let numbersList:Array<number> = [0, 1, 2, 3, 4, 5];
numbersList = [...numbersList, 6, 7, 8, 9, 10];

console.log(numbersList)
console.log('*--------------------------------*');

// ===> Exemple 003

let languagesArray:string[] = new Array('Javascript', 'Python', 'PHP', 'C#', 'Ruby');

function functionLanguages(languages:string[]){
    for (let i = 0; i < languages.length; i++) {
        console.log(languagesArray[i]);
    }
}

functionLanguages(languagesArray)