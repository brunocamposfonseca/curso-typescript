// ===> Exemple 01 [Type Enum - Tipo Number]
enum Languages{
    Portuguese,
    Spanish,
    English,
    French,
}

console.log(Languages)

// ===> Exemple 02 [Type Enum - Tipo String (Não aconselhado)]
enum Days{
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM',
}

console.log(Days.Segunda);

// ===> Exemple 03 [Type Enum - Acessando valores de um Enum com uma chava: (usando o const)]
const enum Food{
    Hamburger,
    Pasta,
    Pizza,
    Pie,
}

function food(c: Food){
    return `O prato de número ${c} é uma comida muito apetitosa!`;
}

console.log(food(Food.Pizza));

// ===> Exemple 04 [Type Enum]
enum Task{
    Todo,
    Progress,
    Done,
}

const taskCompleted = {
    id: 1,
    status: Task.Done,
    description: 'Congratulations! Task completed successfully!'
}

if(taskCompleted.status === Task.Done){
    console.log('Enviar e-mail: Tarefa concluida')
}