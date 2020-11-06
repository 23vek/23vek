// оператор ветвления if else

if (true) {
    console.log(true)
}


if (false) {
    console.log(false)
} else {
    console.log(true)
}

if (null) {
    console.log(null)
} else if (0) {
    console.log(0)
} else if (undefined) {
    console.log(undefined)
} else if ("") {
    console.log("")
} 


let number = 5  

if (number > 5) {
    console.log("bigger than 5")
} else if (number < 5) {
    console.log("less than 5")
} else if (number === 5) {
    console.log("is 5")
} else {
    console.log("is not a number")
}


// тернарный оператор value ? action1 : action2;

console.log( true ? 1 : 2 );
console.log( false ? 1 : 2 );



// оператор выбора switch
// в switch 

switch(1) {
    case "2": 
        console.log("2");
        break; // выход из оператора switch
    case 1: 
        console.log(1);
        break;
    default: // если ни один из case не совпал выполнится действие по умолчанию
        console.log("default");
}


switch (3) {
    case 1:
        console.log(1);
    case 2: 
        console.log(2);
    case 3: 
        console.log(3);
    case 4: 
        console.log(4);
    default:
        console.log(5);
}

switch (3) {
    case 1:
        console.log(1);
        break;
    case 2: 
        console.log(2);
        break;
    case 3: 
        console.log(3);
    case 4: 
        console.log(4);
        break;
    default:
        console.log(5);
}

console.log('---------------------------------------');