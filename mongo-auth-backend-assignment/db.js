const mongoose = require("mongoose");

const creteDbConnection = (dbUrlString) => {
   mongoose
    .connect(dbUrlString)
    .then(() => {
      console.log("MongoDb Connected Successfully");
    })
    .catch((err) => {
      console.log(`Mongo Db Connection Eror : ${err}`);
    });
};

module.exports = creteDbConnection;
