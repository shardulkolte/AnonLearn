const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
dotenv.config({ path: "./.env" });

process.on("uncaughtException", (err) => {
  console.log(err);
  console.log("UNCAUGHT Exception! Shutting down ...");
  process.exit(1);
});

const http = require("http");
const server = http.createServer(app);

app.use("/api/auth", userRoutes);
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
