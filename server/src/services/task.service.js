import { db } from "../db.js";

export const getAllTasksFromDB = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM tasks", [], (err, rows) => {
      if (err) return reject(err);
      else resolve(rows);
    });
  });
};

export const addTaskToDB = (taskData) => {
  const { title, startDate, dueDate, creator, category, description } =
    taskData;

  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO tasks (title, startDate, dueDate, creator, category, description)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [title, startDate, dueDate, creator, category, description],
      function (err) {
        if (err) return reject(err);
        resolve({ id: this.lastID, ...taskData });
      }
    );
  });
};

export const deleteTaskFromDB = (id) => {
  console.log("Deleting task with id:", id);
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM tasks WHERE id = ?`, [id], function (err) {
      if (err) return reject(err);
      resolve({ deleted: this.changes });
    });
  });
};

export const changeTaskFromDB = (id, body) => {
  const { title, startDate, dueDate, creator, category, description } = body;

  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE tasks
     SET title = ?, startDate = ?, dueDate = ?, creator = ?, category = ?, description = ?
     WHERE id = ?`,
      [title, startDate, dueDate, creator, category, description, id],
      function (err) {
        if (err) return reject(err);
        resolve({ updated: this.changes });
      }
    );
  });
};
