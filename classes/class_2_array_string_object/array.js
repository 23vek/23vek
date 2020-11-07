console.log("---------------------- array ----------------------");

let array = [1,2,45,6,7,81,-12];
let array2 = [1,"2",[3,4],{key: "value"}];

// перебор всех елементов массива
array.forEach(function(element,index,selfArray) {
 //   console.log(element,index,selfArray);
});

// выполнение операций с каждым элементом массива, вернёт новый массив
let newArray1 = array.map(function(element,index,selfArray) {return element + 1})
console.log(newArray1, array);
// сортировка элементом массива, вернёт новый массив
let newArray2 = array.sort(function(first,second) {return first > second ? 1 : -1})
console.log(newArray2, array);
// выполнение некоторой операции с элементами массива и сохранение результатов
let result1 = array.reduce(function(generator,element,index,selfArray) {return generator + element}, 0 /* второй параметр начальное значение generator, если не указан то выберается array[0]*/)
//console.log(result1);
// выбор элементом массива которые соответствуют некоторому условию, вернёт новый массив
let newArray4 = array.filter(function(element,index,selfArray) {return element > 5})
//console.log(newArray4);
// выбор первого элемента массива который соответствуют некоторому условию (если ни один не соответствует то undefinded)
let result2 = array.find(function(element,index,selfArray) {return element > 500})
console.log(result2);
// проверка соответствует ли хоть 1 элемент условию
let result3 = array.some(function(element,index,selfArray) {return element > 80})
console.log(result3);
// проверка включает ли значение
let result4 = array.includes(1)

// проверка соответствует ли все элементы условию
let result5 = array.every(function(element,index,selfArray) {return element > 5})



array.push(0); // вставка в конец массива, массив изменится
array.unshift(0); // вставка в начало массива, массив изменится
let result6 = array.pop();
console.log(result6); // вырезать из конеца массива, массив изменится
array.shift(); // вырезать из начала массива, массив изменится