const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "user",
  password: "Amiya@8597",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.image.avatar(),
    faker.internet.password(),
    faker.date.birthdate(),
    faker.date.past(),
  ];
};
// console.log("getRandomUser",getRandomUser());

//inserting new data
let q = "INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = ["123", "Amiya", "ai@gmail.com", "123456"]

let data = [];

for (let i = 1; i <= 100; i++) {
  data.push(getRandomUser());
}

try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (error) {
  console.log(error);
}
connection.end();

// let getRandomUser = () => {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       avatar: faker.image.avatar(),
//       password: faker.internet.password(),
//       birthdate: faker.date.birthdate(),
//       registeredAt: faker.date.past(),
//     };
//   }
//   // console.log("getRandomUser",getRandomUser());
