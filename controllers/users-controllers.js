const uuid = require("uuid/v4");
const HttpError = require("../models/http-error");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Alexandre Queiroz",
    email: "teste@teste.com.br",
    password: "123456",
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
  const { userName, email, password } = req.body;

  const hasUser = DUMMY_USERS.find((u) => u.email === email);

  if (hasUser) {
    throw new HttpError("Could not create users, since it already exists", 401);
  }

  const createdUser = {
    id: uuid(),
    userName,
    email,
    password,
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find((u) => u.email === email);

  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError("Could not identify users", 401);
  }

  res.json({ message: "LOGGED IN!" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
