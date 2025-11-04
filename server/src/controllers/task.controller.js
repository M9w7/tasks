import {
  getAllTasksFromDB,
  addTaskToDB,
  changeTaskFromDB,
  deleteTaskFromDB,
} from "../services/task.service.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await getAllTasksFromDB();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const newTask = await addTaskToDB(req.body);
    console.log(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const result = deleteTaskFromDB(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const changeTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = changeTaskFromDB(id, req.body);
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
