const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./modals/index");

dotenv.config();
connectDB.connectdb();

//Routes
const clientsRoute = require("./routes/clients-route");
// const authRoute = require("./routes/auth-route");

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Routes middleware
// app.use("/auth/sign-up", authRoute);
app.use("/dashboard", clientsRoute);

app.listen(4000, () => console.log("server is running at 4000 port!!"));
