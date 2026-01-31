

const auth = require("../middlewares/authMiddleware");
const admin = require("../middlewares/adminMiddleware");
const router = require("express").Router();
// const router 

router.get("/admin/dashboard", auth, admin, (req, res) => {
  res.json({ secretData: "Welcome Admin 👑" });
});

module.exports = router;

