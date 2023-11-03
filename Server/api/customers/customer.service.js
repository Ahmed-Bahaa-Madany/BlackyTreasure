const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into customers(name, phone, email, details) 
                values(?,?,?,?)`,
      [
        data.name,
        data.phone,
        data.email,
        data.details
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getCustomers: callBack => {
    pool.query(
      `select id, name, phone, email, details, createdAt from customers`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};