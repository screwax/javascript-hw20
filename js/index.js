const users = [
  {
    name: 'Greyson',
    eyeColor: 'green',
    gender: 'male',
    isActive: false,
    email: 'gresysongoods@gmail.com',
    age: 23,
  },
  {
    name: 'Sonny',
    eyeColor: 'blue',
    gender: 'female',
    isActive: true,
    email: 'berringston2w@outbook.com',
    age: 16,
  },
  {
    name: 'Wesley',
    eyeColor: 'brown',
    gender: 'male',
    isActive: true,
    email: 'namespooow@outlook.com',
    age: 19,
  },
  {
    name: 'Colton',
    eyeColor: 'black',
    gender: 'male',
    isActive: false,
    email: 'colntonrampef@gmail.com',
    age: 20,
  },
  {
    name: 'Eleanor',
    eyeColor: 'blue',
    gender: 'female',
    isActive: true,
    email: 'myemailllgirl@gmail.com',
    age: 14,
  }
];

const nameUsers = users.map((user) => user.name);
const eyeColors = users.filter((user) => user.eyeColor === 'blue');
const maleUsers = users.filter((user) => user.gender === 'male');
const activeUsers = users.filter((user) => !user.isActive);
const emailUser = users.find((user) => user.email === 'namespooow@outlook.com');
const ageUsers = users.filter((user) => 18 <= user.age && user.age <= 50);
console.log(nameUsers);
console.log(eyeColors);
console.log(maleUsers);
console.log(activeUsers);
console.log(emailUser);
console.log(ageUsers);