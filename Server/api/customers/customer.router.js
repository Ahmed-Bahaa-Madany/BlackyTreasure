const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createCustomer,
  getCustomers,
} = require("./customer.controller");
router.get("/", checkToken, getCustomers);
router.post("/", createCustomer);

module.exports = router;