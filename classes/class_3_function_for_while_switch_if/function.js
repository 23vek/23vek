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
// если функция не имеет имени то она называется анонимной
let printText = function (text) {
    alert(text);
}

printText("lorem ipsum");
printText("hi bro");

// анонимную функции можно вызвать не сохраняя её в переменную
(function(name, age) {
    console.log({name, age});
})("name", 20)


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

// стрелочный вид функций 
// эти три функции по сути одинаковые
function declarationFuncPrint(a) {
    console.log(a)
}
let expressionFuncPrint = function (a) {
    console.log(a)
}
let arrowFuncPrint = (a) => {
    console.log(a)
}

// если функция в лдну строку что то возращает  то есть краткий вариант для стрелочной функции
let shortFunc = (a) => a + 1;
let defaultFunc = function (a)  {return a + 1}

// если нужно вернуть объект то нужно его обернуть в круглые скобки
let createBaseUser = (name) => ({name, age: 1});

arrowFuncPrint(1);

console.log('---------------------------------------');
