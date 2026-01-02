const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const { createTask, getTasks, deleteTask } = require("../controllers/taskControllers");

router.post("/", auth, createTask);
router.get("/", auth, getTasks);
router.delete("/:id", auth, deleteTask);

module.exports = router;
