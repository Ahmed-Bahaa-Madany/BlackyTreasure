const router = require("express").Router();
const {
  createUser,
  login
} = require("./user.controller");
router.post("/", createUser);
router.post("/login", login);

module.exports = router;