'use strict'

//#XjJuucOMR0
// 7.1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


//function User(id, name, surname, email, phone) {
//       this.id = id;
//       this.name = name;
//       this.surname = surname;
//       this.email = email;
//       this.phone = phone
//
//   }
//
//
//  const users = [
//      new User(1,'vasya', 'pupkin', 'asd@asd.com', '380935554345'),
//       new User(2,'kolya', 'repkin', 'asd@asd.com', '380935554345'),
//       new User(3,'olya', 'trokin', 'asd@asd.com', '380935554345'),
//       new User(4,'petya', 'stopkin', 'asd@asd.com', '380935554345'),
//       new User(5,'sveta', 'dronff', 'asd@asd.com', '380935554345'),
//       new User(6,'dora', 'kurtz', 'asd@asd.com', '380935554345'),
//       new User(7,'lisa', 'pupkin', 'asd@asd.com', '380935554345'),
//       new User(8,'max', 'pupkin', 'asd@asd.com', '380935554345'),
//       new User(9,'alex', 'pupkin', 'asd@asd.com', '380935554345'),
//       new User(10,'vasya', 'pupkin', 'asd@asd.com', '380935554345'),
//   ];

//  console.log(users);


//#2ikXsE2WiKZ
// 7.2 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

//  const filterUsers = users.filter(user => (user.id % 2 === 0));
//
//   console.log(filterUsers);


//#pOeHKct
// 7.3 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//const sortUsers = filterUsers.sort((user1, user2) => user1.id - user2.id);
//
// console.log(sortUsers);


//#nkMXISv
// 7.4 - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client




//function Client(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }

//const clients = [
//     new Client(1, 'vasya', 'pupkin', 'pup@gmail.com', '+380975645654', ['tomato']),
//     new Client(2, 'olga', 'tronss', 'tronss@gmail.com', '+380975646754', ['tomato', 'apricot', 'carrot', 'fig']),
//     new Client(3, 'max', 'ford', 'ford@gmail.com', '+380678956453', ['apple', 'kiwi', 'fig']),
//     new Client(4, 'petya', 'loyd', 'loyd@gmail.com', '+380978546423', ['lemon', 'mango']),
//     new Client(5, 'katya', 'gump', 'gump@gmail.com', '+380935467568', ['lime', 'kiwi', 'apricot', 'apple']),
//     new Client(6, 'max', 'petroff', 'petroff@gmail.com', '+380678956453', ['apple', 'apricot', 'tomato', 'kiwi', 'fig']),
//     new Client(7, 'petya', 'kruts', 'kruts@gmail.com', '+380978546423', ['lemon', 'mango', 'kiwi', 'papaya']),
//     new Client(8, 'troy', 'gerard', 'gerard@gmail.com', '+380678956453', ['apple', 'apricot', 'kiwi', 'fig', 'papaya', 'mango']),
//     new Client(9, 'joy', 'lindsy', 'lindsy@gmail.com', '+380978546423', ['lemon', 'mango', 'kiwi', 'papaya']),
//     new Client(10, 'katya', 'trump', 'trump@gmail.com', '+380935467568', ['lime', 'kiwi', 'apricot', 'apple']),
//
// ]
//
// console.log(clients);



//function Client(id, name, surname, email, phone, ...products) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = products;
// }
//
// function Product(id, name, price) {
//     this.id = id;
//     this.nameProduct = name;
//     this.price = price;
// }
//
// const clients = [
//     new Client(1, 'vasya', 'pupkin', 'pup@gmail.com', '+380975645654', new Product(1, 'apple', 34), new Product(4, 'kiwi', 55)),
//     new Client(2, 'vasya', 'pupkin', 'pup@gmail.com', '+380975645654', new Product(1, 'apple', 34), new Product(4, 'kiwi', 55), new Product(5, 'apricot', 57)),
//     new Client(3, 'vasya', 'pupkin', 'pup@gmail.com', '+380975645654', new Product(1, 'apple', 34), new Product(4, 'kiwi', 55)),
//     new Client(4, 'vasya', 'pupkin', 'pup@gmail.com', '+380975645654', new Product(1, 'apple', 34)),
//     new Client(5, 'vasya', 'pupkin', 'pup@gmail.com', '+380975645654', new Product(1, 'apple', 34), new Product(4, 'kiwi', 55)),
//     new Client(6, 'vasya', 'pupkin', 'pup@gmail.com', '+380975645654', new Product(1, 'apple', 34), new Product(4, 'kiwi', 55)),
//     new Client(7, 'vasya', 'pupkin', 'pup@gmail.com', '+380975645654', new Product(1, 'apple', 34), new Product(4, 'kiwi', 55)),
//     new Client(8, 'vasya', 'pupkin', 'pup@gmail.com', '+380975645654', new Product(1, 'apple', 34), new Product(4, 'kiwi', 55), new Product(1, 'apple', 34),new Product(4, 'kiwi', 55)),
//     new Client(9, 'vasya', 'pupkin', 'pup@gmail.com', '+380975645654', new Product(1, 'apple', 34), new Product(4, 'kiwi', 55), new Product(1, 'apple', 34)),
//     new Client(10, 'vasya', 'pupkin', 'pup@gmail.com', '+380975645654', new Product(1, 'apple', 34), new Product(4, 'kiwi', 55)),
// ];
//
// console.log(clients);


//#8abtVjRv
// 7.5 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

//const sortClients = clients.sort((client1, client2) => client1.order.length - client2.order.length);
//
// console.log(sortClients);


//#vV9a6584I5
// 7.6 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


//function Car(model, producer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         if(newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     this.changeYear = function (newYear) {
//         if(newYear > 1885) this.year = newYear;
//     };
//     this.addDriver = function (driverObject) {
//         if(driverObject) this.driver = driverObject;
//     }
// };
//
// const car = new Car('Camry', 'Toyota', '2023', 200, '2353');
//
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2015);
// car.addDriver({});
// console.log(car);

//#5kla3yMpgp
// 7.7 - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//   class Car {
//
//
//        constructor(model, producer, year, maxSpeed, engineVolume) {
//            this.model = model;
//           this.producer = producer;
//           this.year = year;
//           this.maxSpeed = maxSpeed;
//           this.engineVolume = engineVolume;
//
//               }
//
//        drive()  {
//               return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
//           };
//           info()  {
//                for (const key in this) {
//                   console.log(key, this[key]);
//               }
//           };
//           increaseMaxSpeed(newSpeed) {
//               if(newSpeed > 0 ) this.maxSpeed = this.maxSpeed + newSpeed;
//
//           };
//           changeYear(newYear) {
//                 if (newYear > 1885)  this.year = newYear;
//
//           };
//           addDriver(driverObject) {
//               if (driverObject) return this.driver = driverObject;
//
//
//         }
//    }
//
//      const car = new Car('Camry', 'Toyota', '2023', 200, '2353');
//
//
//    console.log(car);
//    car.drive();
//    car.info();
//    car.increaseMaxSpeed(100);
//    car.changeYear(2015);
//    car.addDriver({});
//    console.log(car);

//#zg6Fifnqig
// 7.8 -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

//class Cinderella {
//
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// const cinderellas = [
//     new Cinderella('Olia', 23, 35),
//     new Cinderella('Ella', 21, 34),
//     new Cinderella('Jane', 26, 36),
//     new Cinderella('Dora', 28, 37),
//     new Cinderella('Anne', 22, 38),
//     new Cinderella('Jess', 21, 33),
//     new Cinderella('Abigail', 20, 35),
//     new Cinderella('Diana', 24, 38),
//     new Cinderella('Eliza', 23, 37),
//     new Cinderella('Emma', 23, 35)
//
// ];
//
// class Prince {
//
//     constructor(name, age, shoeHeFound) {
//         this.name = name;
//         this.age = age;
//         this.shoeHeFound = shoeHeFound;
//     }
//
// }
//
// const prince = new Prince('Jon', 33, 21);



//for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.shoeHeFound) prince.wife = cinderella;
// }

//const princeWife = cinderellas.find(cinderella => cinderella.footSize === prince.shoeHeFound);
//
// prince.wife = princeWife;



//#gsKLAsNWM
// 7.9 - Через Array.prototype. створити власний foreach, filter

//Array.prototype.myForEach = function (callback) {
//
//      for (const item of this) {
//           callback(item);
//      }
//
// }
//     [2, 3, 4, 5 ].myForEach(( x )=> console.log(x));

//const users = [
//      {name: 'vasya', age:33},
//      {name: 'vasya', age:35},
//      {name: 'vasya', age:37},
//      {name: 'vasya', age:33}
// ]
//
// Array.prototype.myFilter = function (callback){
//      const arr = [];
//      for (const item of this) {
// if (callback(item)) {
// arr.push(item);
// }
//      }
//      return arr;
// }
//
//
// const result = users.myFilter((user) => user.age);
//
// console.log(result);



