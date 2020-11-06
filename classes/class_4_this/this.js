let user = {
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
    },
    print: function() {
        // console.log(this)
        console.log(`${this.name} is ${this.age} y.o.`)
    },
    getCopy() {
        let copy = {};
        for(let key in this) {
            copy[key] = this[key];
        } 
        return copy;
    }

}


user.addSport = function(sport) {
    if (this.sports.includes(sport)) {
        return false;
    }
    this.sports.push(sport);
    return true;
}
user.removeSport = function(sport) {
    if (this.sports.includes(sport)) {
        this.sports = this.sports.filter((userSport) => userSport !== sport )
        return true;
    }
    return false;
}

// user.print();


// const userClone = user.getCopy();

// console.log(user === userClone);

// userClone.print();
// userClone.removeSport("football");
// console.log(user.sports,userClone.sports)