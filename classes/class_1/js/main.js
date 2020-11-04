console.log("hello");

let number = 1;
let boolean = true; // false
let string = "string"; // 'string' `string`
let string2 = `value number ${number}`;
let string3 = 'value number ' + number;
let nulll = null;
let undefinedd = undefined;
let array = [1,"asd",false];
let object = {
    key: "value",
    obj: {
        key: 131
    },
    array: [123,1234]
};

if(number > 1) {
    console.log(true)
} else if (number === 1) {
    console.log("is 1")
} else {
    console.log(false)
}

for (let index = 0; index < 5; index++) {
    console.log(index);    
}
console.log('--------------------------------------')
let index2 = 5;
while (index2 > 0) {
    console.log(index2--);    
}
console.log('--------------------------------------')

let index3 = 0;
do  {
    console.log(index3--);    
} while (index3 > 0)


// console.log("object" + " " + "123");
// console.log(123 + 1234);