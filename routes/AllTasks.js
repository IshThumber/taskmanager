const express = require("express");
const router = express.Router();
const {
  allTask,
  createTask,
  getTask,
  deleteTask,
  updateTask
} = require("../controllers/Tasks");

router.route("/").get(allTask).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
