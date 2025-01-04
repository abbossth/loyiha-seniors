let students = ["Abbos", "Ilyos", "Feruza", "Sulaymon"];

// forEach
let result = students.forEach((name) => {
  console.log(name);
});

console.log(result);

// map => mavjud arrayni tahrirlaydi va yangi array hosil qilib beradi
let students1 = students.map((name) => name.toUpperCase());

console.log(students1);

// filter
let people = [
  { name: "Abbosbek", age: 22 },
  { name: "John", age: 35 },
  { name: "Ilyos", age: 16 },
  { name: "Qurbonboy", age: 68 },
];

let filteredPeople = people.filter((person) => person.age < 18);
let filteredPeople2 = people.filter((person) => person.name[0] == "A");

console.log(filteredPeople);
console.log(filteredPeople2);

// some => array malumotlaridan qaysidir biri togri kelsa - true qaytaradi, xech biri togri kelmas false qaytaradi
let someResult = people.some((person) => person.age < 10);
// console.log(someResult);

// every => array malumotlari hammasida shart bajarilsa true qaytaradi
let everyResult = people.every((person) => person.age > 20);
console.log(everyResult);
