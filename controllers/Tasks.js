const Task = require("../models/Tasks");

const allTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    console.log(`All tasks: ${tasks}`);
    res.status(200).json({ tasks });
  } catch (err) {
    console.log(err);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log(`Task created: ${task}`);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      console.log(`No task with id ${taskID}`);
      return res.status(404).json({ message: `No task with id: ${taskID}` });
    }
    console.log(`Task with id ${taskID} found`);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body);
    if (!task) {
      console.log(`No task with id ${taskID}`);
      return res.status(404).json({ message: `No task with id: ${taskID}` });
    }
    console.log(`Task with id ${taskID} updated`);
    res.status(200).json({ task });
  } catch (err) {
    console.log(err);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    // const task = await Task.deleteOne({ _id: taskID });
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      console.log(`No task with id ${taskID}`);
      return res.status(404).json({ message: `No task with id: ${taskID}` });
    }
    console.log(`Task with id ${taskID} deleted`);
    res.status(200).json({ task });
    // res.status(200).json({ task: null, status: "Successfully Deleted!" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { allTask, createTask, getTask, updateTask, deleteTask };
