const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const routes = require("./routes/auth");
const { Server } = require("socket.io");

const path = require("path");

process.on("uncaughtException", (err) => {
  console.log(err);
  console.log("UNCAUGHT Exception! Shutting down ...");
  process.exit(1);
});
const app = require("./app");

const http = require("http");
const User = require("./models/userModel");
const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000", // change to your frontend url if needed
//     methods: ["GET", "POST"],
//   },
// });

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

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // change to your frontend url if needed
    methods: ["GET", "POST"],
  },
  pingTimeout: 60000,
});

io.on("connection", async (socket) => {
  socket.on("setup", (user) => {
    socket.join(user.data._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
  });

  socket.on("new message", (newMessageStatus) => {
    var chat = newMessageStatus.chat;
    if (!chat.users) {
      return console.log("chat.users not defined");
    }
    chat.users.forEach((user) => {
      if (user._id == newMessageStatus.sender._id) return;
      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  console.log("UNHANDLED REJECTION! Shutting down ...");
  server.close(() => {
    process.exit(1);
  });
});
