export const people = [
  {
    id: 1,
    name: "hoon",
    age: "19",
    gender: "male",
  },
  { id: 2, name: "kim", age: "17", gender: "male" },
  { id: 1, name: "Lee", age: "15", gender: "male" },
  { id: 1, name: "Park", age: "18", gender: "male" },
  { id: 1, name: "Steve", age: "19", gender: "male" },
  { id: 1, name: "S", age: "22", gender: "male" },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
