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

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // change to your frontend url if needed
    methods: ["GET", "POST"],
  },
});

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

io.on("connection", async (socket) => {
  // console.log(JSON.stringify(socket.handshake.query));
  const user_id = socket.handshake.query["user_id"];

  const socket_id = socket.id;
  console.log(`User connected ${socket_id}`);

  if (Boolean(user_id)) {
    //user_id != null &&
    try {
      User.findByIdAndUpdate(user_id, {
        socket_id: socket.id,
        status: "Online",
      });
    } catch (e) {
      console.log(e);
    }
  }

  socket.on("text_message", async (data) => {
    console.log("Received message:", data);
  });

  // handle Media/Document Message
  socket.on("file_message", (data) => {
    console.log("Received message:", data);

    // data: {to, from, text, file}

    // Get the file extension
    const fileExtension = path.extname(data.file.name);

    // Generate a unique filename
    const filename = `${Date.now()}_${Math.floor(
      Math.random() * 10000
    )}${fileExtension}`;
  });

  // -------------- HANDLE SOCKET DISCONNECTION ----------------- //

  socket.on("end", async (data) => {
    // Find user by ID and set status as offline

    if (data.user_id) {
      await User.findByIdAndUpdate(data.user_id, { status: "Offline" });
    }

    // broadcast to all conversation rooms of this user that this user is offline (disconnected)

    console.log("closing connection");
    socket.disconnect(0);
  });
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  console.log("UNHANDLED REJECTION! Shutting down ...");
  server.close(() => {
    process.exit(1);
  });
});
