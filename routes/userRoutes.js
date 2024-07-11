const express = require("express");
const {
  registerUser,
  authUser,
  getUserProfile,
} = require("../controllers/userController");
const { protect } = require("../middleware/authenticate");
const { upload } = require("../middleware/upload");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.get("/profile", protect, getUserProfile);
router.post("/upload", protect, upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

module.exports = router;
