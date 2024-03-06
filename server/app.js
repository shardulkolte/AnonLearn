const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongosanitize = require("express-mongo-sanitize");
const bodyParser = require("body-parser");
const xss = require("xss");
const app = express();
const dotenv = require("dotenv");

// const connectMongo = require("./db/mongoConnector"); //bhavesh
// connectMongo();//bhavesh

dotenv.config({ path: "./.env" });

app.use(
  cors({
    origin: "*",

    methods: ["GET", "PATCH", "POST", "DELETE", "PUT"],

    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  max: 3000,
  windowMs: 60 * 60 * 1000, // In one hour
  message: "Too many Requests from this IP, please try again in an hour!",
});

app.use("/tawk", limiter);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(mongosanitize());

// app.use(xss());

app.use("/api/auth", userRoutes);

//mongocompass database---------------------------------------------

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("MongoDB Connected Successfully to compass");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//----------------------------------------------------------------------

module.exports = app;
