const people = [
  { id: 1, name: "Ben", age: 22, gender: "male" },
  { id: 2, name: "John", age: 30, gender: "male" },
  {
    id: 3,
    name: "Maria",
    age: 23,
    gender: "female",
  },
  {
    id: 4,
    name: "Tea",
    age: 23,
    gender: "female",
  },
];

//find the person with id 2
const personIdTwo = people.find((person) => person.id === 2);
console.log({ personIdTwo });

//find all females
const females = people.filter((person) => person.gender === "female");

console.log({ females });

//remove person with id 3
const newPeopleList = people.filter((person) => person.id !== 3);

console.log({ newPeopleList });
//update the age of person with ID = 4 to 25

const updatedPeople = people.map((person) => {
  if (person.id === 4) {
    const updatedPerson = { ...person, age: 25 };
    return updatedPerson;
  }
  return person;
});

console.log({ updatedPeople });

const person = { name: "Ben", age: 2 };

const { name, age } = person;

const personTwo = { ...person };

personTwo.age = 4;

console.log({ person });

const l1 = [1, 2, 3];

const l2 = [10, ...l1, 7];

console.log({ l2 });