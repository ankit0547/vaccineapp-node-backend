const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/dbConfig");
const options = require("./src/swagger/options");
const swaggerUi = require("swagger-ui-express");

dotenv.config();

connectDB.connectdb();

const app = express();

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(options, { explorer: true })
);

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Routes
const { userRoute } = require("./src/routes/index");

app.use("/users", userRoute);

app.listen(4000, () => console.log("server is running at 4000 port!!"));
