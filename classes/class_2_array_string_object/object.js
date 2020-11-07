console.log("---------------------- object ----------------------");

let obj = {
        id: 1,
        name: "Roise",
        sex: "male",
        age: 23,
        sports: ["football", "basketball"],
        address: {
            contry: "Belarus",
            city: "Borisow",
            street: null,
            number: 12
    }
}


// обращение к элементам
obj.id;
obj["id"];

obj.sports[1];

obj.address.city;

// массив всех ключей в объекте
console.log (Object.keys(obj));

for (let key in obj) {
    console.log(key, obj[key]);
}
let key = "id"
let obj1 = {id: 1, key: "pizda"}
console.log(obj1[key])
console.log(obj1.key)

