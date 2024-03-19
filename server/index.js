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
  // We can write our socket event listeners in here................................

  // socket.on("friend_request", async (data) => {
  //   const to = await User.findById(data.to).select("socket_id");
  //   const from = await User.findById(data.from).select("socket_id");

  //   // create a friend request
  //   await FriendRequest.create({
  //     sender: data.from,
  //     recipient: data.to,
  //   });
  //   // emit event request received to recipient
  //   io.to(to?.socket_id).emit("new_friend_request", {
  //     message: "New friend request received",
  //   });
  //   io.to(from?.socket_id).emit("request_sent", {
  //     message: "Request Sent successfully!",
  //   });
  // });

  // socket.on("accept_request", async (data) => {
  //   // accept friend request => add ref of each other in friends array
  //   console.log(data);
  //   const request_doc = await FriendRequest.findById(data.request_id);

  //   console.log(request_doc);

  //   const sender = await User.findById(request_doc.sender);
  //   const receiver = await User.findById(request_doc.recipient);

  //   sender.friends.push(request_doc.recipient);
  //   receiver.friends.push(request_doc.sender);

  //   await receiver.save({ new: true, validateModifiedOnly: true });
  //   await sender.save({ new: true, validateModifiedOnly: true });

  //   await FriendRequest.findByIdAndDelete(data.request_id);

  //   // delete this request doc
  //   // emit event to both of them

  //   // emit event request accepted to both
  //   io.to(sender?.socket_id).emit("request_accepted", {
  //     message: "Friend Request Accepted",
  //   });
  //   io.to(receiver?.socket_id).emit("request_accepted", {
  //     message: "Friend Request Accepted",
  //   });
  // });

  // Handle incoming text/link messages

  socket.on("text_message", async (data) => {
    console.log("Received message:", data);

    // // data: {to, from, text}

    // const { message, conversation_id, from, to, type } = data;

    // const to_user = await User.findById(to);
    // const from_user = await User.findById(from);

    // // message => {to, from, type, created_at, text, file}

    // const new_message = {
    //   to: to,
    //   from: from,
    //   type: type,
    //   created_at: Date.now(),
    //   text: message,
    // };

    // // fetch OneToOneMessage Doc & push a new message to existing conversation
    // const chat = await OneToOneMessage.findById(conversation_id);
    // chat.messages.push(new_message);
    // // save to db`
    // await chat.save({ new: true, validateModifiedOnly: true });

    // // emit incoming_message -> to user

    // io.to(to_user?.socket_id).emit("new_message", {
    //   conversation_id,
    //   message: new_message,
    // });

    // // emit outgoing_message -> from user
    // io.to(from_user?.socket_id).emit("new_message", {
    //   conversation_id,
    //   message: new_message,
    // });
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

    // upload file to AWS s3

    // create a new conversation if its dosent exists yet or add a new message to existing conversation

    // save to db

    // emit incoming_message -> to user

    // emit outgoing_message -> from user
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
