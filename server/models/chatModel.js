const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String },
    isGroupChat: { type: Boolean },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", //referencing to User model
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message", //refrencing Message model
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //referencing to User model
    },
  },
  {
    timeStamp: true,
  }
);

const Chat = mongoose.Model("Chat", chatModel);
module.exports = Chat;
