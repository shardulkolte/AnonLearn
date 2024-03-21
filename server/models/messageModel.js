const mongoose = require("mongoose");

const messagesModel = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //referencing to User model
    },
    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //referencing to User model
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat", //refrencing Chat Model
    },
  },
  {
    timeStamp: true,
  }
);

const Message = mongoose.model("Message", messagesModel);
module.exports = Message;
