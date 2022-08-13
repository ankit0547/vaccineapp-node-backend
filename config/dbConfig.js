// db connection
exports.connectdb = async () => {
  const mongoose = require("mongoose");
  const URL = process.env.DB_BASE_URL;

  // Database Name
  const dbName = process.env.DB_NAME;

  mongoose.connect(
    `${URL}/${dbName}`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (error) => {
      if (!error) {
        console.log("Database Connected successfully to server");
      } else {
        console.log("Database not Connected to server");
      }
    }
  );

  // const MongoClient = require("mongodb").MongoClient;

  // const assert = require("assert");

  // const client = new MongoClient(URL, { useUnifiedTopology: true });
  // // Use connect method to connect to the server
  // client.connect(
  //   await function (err) {
  //     if (!err) {
  //       assert.equal(null, err);
  //       console.log("Database Connected successfully to server");

  //       const db = client.db(dbName);

  //       client.close();
  //     } else {
  //       console.log("Database not Connected to server");
  //     }
  //   }
  // );
};
