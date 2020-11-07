let people = [
   { id: 1,
    name: "Андрей",
    surname: "Деревяшко",
    patronymic: "Юрьевич",
    age: 21,
    work: "Программист",
    cash: 1000
},
{ id: 2,
    name: "Сергей",
    surname: "Ильюшонок",
    patronymic: "Леонидович",
    age: 23,
    work: "мчс",
    cash: 300
},
{ id: 3,
    name: "Павел",
    surname: "Канаш",
    patronymic: "Ильич",
    age: 22,
    work: "Лох",
    cash: 15}
]
console.log(people);

let people1 = people.sort(function(first, second) {return first.age > second.age})
console.log(people1)

let people2 = people.sort(function(first, second) {return first.cash > second.cash})
console.log(people2)
let peopleMax = people.find(function(element,index,selfArray) {return index < 1})
console.log(peopleMax);

let peopleMin = people.find(function(element,index,selfArray) {return index >1})
console.log(peopleMin);



let p1 = people[0].cash
let p2 = people[1].cash
let p3 = people[2].cash


console.log( people[0].surname people[0]name[0] people[0]patronymic[0] (people[0].age)- p1 
 people[1].surname people[1].name[0] people[1]patronymic[0] (people[1].age) - p2 
 people[2].surname people[2].name[0] people[2]patronymic[0] (people[2].age) - p2)  