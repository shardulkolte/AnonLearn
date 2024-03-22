const router = require("express").Router();
const messageController = require("../controllers/messageController");
const authController = require("../controllers/authController");

router.get("/:chatId", authController.protect, messageController.allMessages);
router.post("/", authController.protect, messageController.sendMessage);

module.exports = router;
