let array = [12, 24, 1, 12, 421,5,1,-1,23,-71,32];

let arrayAfterSort = bubleSort(arr); // вызов функции и получение результата

console.log(arrayAfterSort); // вывод результата

let resultMessage = test("Роис", "иди нахуй");


function bubleSort(arr) { 
    let swapped;

    do {
        swapped = false;
        console.log(arr);
        arr.forEach((item, index) => {
          if (item > arr[index + 1]) {
           
            let temp = item;
            arr[index] = arr[index + 1];
            arr[index + 1] = temp;
            swapped = true;
          }
        })
      } while (swapped);
    }
        return arr;
}



function test(name, message) { 
    return name + ' ' + message;
}