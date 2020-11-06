function getBiggest (argument1, argument2) { // объявление функции в стиле function declaration
    // тело функции
    return argument1 >= argument2 ? argument1 : argument2
}


getBiggest(1,2); // вызов функции

console.log(getBiggest(1,2));
console.log(getBiggest(3,2));


// функция не обязательно должна возращать значения или принимать параметры 
function voidExample() {
    const a = 1; // const ключевое слово для создание переменных с той лишь разницей что переменную нельзя изменить
    // a = 2; // вызовет ошибку
    const b = 2;
    console.log(a,b)
}

// функцию также можно сохранить в переменную  (function expresion)

let printText = function (text) {
    alert(text);
}

printText("lorem ipsum");
printText("hi bro");


// функция берёт свои параметры для выполнение действий 
// но если в теле функции переменная не определена то переменная ищется в блоке кода выше ( ограниченом "{}")
// погугли всплытие js

let a = 1;
let b = 1;

console.log(a,b);
changeA(5);
console.log(a,b)

function changeA (a) {
    a = 2;
    b = 2
}
console.log('---------------------------------------');
