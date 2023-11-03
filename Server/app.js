require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const customerRouter = require("./api/customers/customer.router");

const cors = require('cors');
const corsOptions ={
  origin:'https://nmhlogestic.com/', 
  credentials:true, 
  //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/customers", customerRouter);

app.listen();

