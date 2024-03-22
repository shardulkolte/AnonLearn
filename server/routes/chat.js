const router = require("express").Router();
const chatController = require("../controllers/chatController");
const authController = require("../controllers/authController");

const { protect } = require("../controllers/authMiddleware");

router.post("/", authController.protect, chatController.accessChat);
router.get("/", authController.protect, chatController.fetchChats);
router.post(
  "/createGroup",
  authController.protect,
  chatController.createGroupChat
);
router.get("/fetchGroup", authController.protect, chatController.fetchGroups);
router.put("/exitGroup", authController.protect, chatController.groupExit);
router.put(
  "/addSelfToGroup",
  authController.protect,
  chatController.addSelfToGroup
);

module.exports = router;
