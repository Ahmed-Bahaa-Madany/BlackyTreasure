const {
    create,
    getCustomers
  } = require("./customer.service");
  
  module.exports = {
    createCustomer: (req, res) => {
      const body = req.body;
      create(body, (err, results) => {
        if (err) {
          // console.log(err);
          return res.status(500).json({
            success: 0,
            message: err
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
    getCustomers: (req, res) => {
      getCustomers((err, results) => {
        if (err) {
          // console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    }
  };