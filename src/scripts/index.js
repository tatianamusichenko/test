import '../styles/index.scss';

let user = {
    name: "Katya",
    surname: "Vasulchuk",
    age: "30",
    data: "12.05.1990",
    height: "177.5",
    hasAnimal: true,
    getName: function () {
        console.log("name", this.name);
    },
    getSurname: function () {
        console.log("surname", this.surname);
    },
    getData: function () {
        console.log("data", this.data);
    },
    getUser: function () {
        console.log(user.name + " " + user.surname + " " + user.data, this.user);
    }
};
console.log(user.name);
console.log(user.surname);
console.log(user.age);
console.log(user.data);
console.log(user.height);
console.log(user.hasAnimal);

let food = ["pizza", "rolls", "roast potatoes", "chicken wings", "chocolate cake"]
console.log(food);

user.getName();
user.getSurname();
user.getData();
user.getUser();
