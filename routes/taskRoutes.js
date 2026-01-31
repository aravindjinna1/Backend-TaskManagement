const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const { createTask, getTasks, deleteTask, updatedTask } = require("../controllers/taskControllers");


console.log("auth =>", auth);
console.log("updatedTask =>", updatedTask);

router.post("/", auth, createTask);
router.get("/", auth, getTasks);
router.delete("/:id", auth, deleteTask);
router.put("/:id", auth, updatedTask); 
module.exports = router;
