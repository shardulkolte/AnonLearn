const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const routes = require("./routes/auth");

process.on("uncaughtException", (err) => {
  console.log(err);
  console.log("UNCAUGHT Exception! Shutting down ...");
  process.exit(1);
});
const app = require("./app");

const http = require("http");
const server = http.createServer(app);

app.use(routes);

//mongo atlas database---------------------------------------------------

mongoose
  .connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected Successfully to atlas");
  })
  .catch((err) => {
    console.log(err.message);
  });

//---------------------------------------------------------------------

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  console.log("UNHANDLED REJECTION! Shutting down ...");
  server.close(() => {
    process.exit(1);
  });
});
