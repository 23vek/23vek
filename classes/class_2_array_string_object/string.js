console.log("---------------------- string ----------------------");

let string = "roise pidor";
let string2 = 'roise pidor';


// шаблоны
let value = "pidor";
    let template = `roise ${value} ${string}`;
console.log (template);

// длинна строки (аналогично массиву)
string.length;
console.log (string.length);
// можно обратиться к символу через индекс ("i")
string [i] += "1"
console.log (string);
// строка начиная с символа и заканчивая символом ("roise")
string.slice(0,5); 
console.log (string.slice(0,5));
// разобъёт строку по символу и вернёт массив строк (["roise","pidor"])
console.log (string.split("o"));