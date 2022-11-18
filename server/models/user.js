const users = [
  {
    userName: "cathy123",
    password: "icecream"
  },
  {
    userName: "fredburger",
    password: "badpassword"
  },
  {
    userName: "bobbyjones",
    password: "incorrect"
  },
  {
    userName: "UppalBaal",
    password: "potatopancake"
  }
];

let getUsers = () => users;
module.exports = { getUsers };