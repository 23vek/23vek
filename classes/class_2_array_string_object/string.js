console.log("---------------------- string ----------------------");

let string = "roise pidor";
let string2 = 'roise pidor';


// шаблоны
let value = "pidor";
let template = `roise ${value}`;


// длинна строки (аналогично массиву)
string.length;

// можно обратиться к символу через индекс ("i")
string[2];

// строка начиная с символа и заканчивая символом ("roise")
string.slice(0,5); 

// разобъёт строку по символу и вернёт массив строк (["roise","pidor"])
string.split(" ");