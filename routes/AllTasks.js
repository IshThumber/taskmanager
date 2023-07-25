const express = require("express");
const router = express.Router();
const {
  allTask,
  createTask,
  getTask,
  deleteTask,
  updateTask
} = require("../controllers/Tasks");

router.route("/").get(allTask).get(getTask).post(createTask);
router.route("/:id").patch(updateTask).delete(deleteTask);

module.exports = router;
