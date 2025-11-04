import sqlite3 from "sqlite3";
import { mockTasks, mockCats } from "./mockdata.js";
sqlite3.verbose();

// db connection
export const db = new sqlite3.Database(
  "tasks.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE
);

export const execute = async (db, sql) => {
  return new Promise((resolve, reject) => {
    db.exec(sql, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

// init
export const createTablesDB = async () => {
  try {
    await execute(
      db,
      `CREATE TABLE IF NOT EXISTS tasks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          startDate TEXT NOT NULL,
          dueDate TEXT NOT NULL,
          creator TEXT NOT NULL,
          category TEXT NOT NULL,
          description TEXT NOT NULL)`
    );

    await execute(
      db,
      `CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE)`
    );
  } catch (error) {
    console.log(error);
  }
};

// fill up db with mockdata
export const fillDBWithMockdata = async () => {
  // check if filled up already
  const row = await new Promise((resolve, reject) => {
    db.get("SELECT COUNT(*) as count FROM categories", [], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  console.log(row);

  if (row.count === 0) {
    console.log("Seeding initial data...");

    const categories = ["Backend", "Frontend"];
    for (const cat of mockCats) {
      db.run("INSERT INTO categories (name) VALUES (?)", [cat.name]);
    }

    for (const task of mockTasks) {
      const { title, startDate, dueDate, creator, category, description } =
        task;
      db.run(
        "INSERT INTO tasks (title, startDate, dueDate, creator, category, description) VALUES (?, ?, ?, ?, ?, ?)",
        [title, startDate, dueDate, creator, category, description]
      );
    }

    console.log("Seeding finished.");
  } else {
    console.log("Database already has data, skipping seeding.");
  }
};
