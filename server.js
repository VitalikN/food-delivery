const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3003 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3003);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
