for (let index = 0; index < 5; index++) {
    console.log(index);
}

for (let index = 5; index > 0; index--) {
    console.log(index);
}

for (let index = 0; index <= 10; index++) {
    if (index > 5) {
        console.log("bigger than 5")
    } else if (index < 5) {
        console.log("less than 5")
    } else if (index === 5) {
        console.log("is 5")
    } else {
        console.log("is not a number")
    }
}



// циклы можно прервать 
for (let index = 0; index < 5; index++) {
    if (index === 3) {
        continue; // сразу перейдёт к следуйщей итерации
    }

    if (index === 4) {
        break; // завершит цикл и продолжать его не будет
    }

    console.log(index)
}



// выполняется пока условие правдиво
// проверка выполняется перед началом итерации
let indexForWhile = 0;

while (indexForWhile < 5) {
    console.log(indexForWhile)
    indexForWhile++;
}

// выполняется пока условие правдиво
// проверка выполняется в конце итерации
indexForWhile = 0;
do {
    console.log(indexForWhile)
    indexForWhile++;
} while (indexForWhile < 5)




// так же есть другие варианты цикла for


// for in перебирает все ключи у объекта
// для массива это индексы элементов массива

let arrayForIn = ["first", "second", "therd"];
for (let key in arrayForIn) {
    console.log(key, arrayForIn[key]);
}

let objForIn = {
    id: 1,
    name: "Name",
    age: 23,
    childrens: ["Vista", "XP"]
}

for (let key in objForIn) {
    console.log(key, objForIn[key]);
}

// for in перебирает все значения массива и некоторых других объектов
let arrayForOf = ["first", "second", "therd"];
for (let value of arrayForIn) {
    console.log(value);
}
console.log('---------------------------------------');
