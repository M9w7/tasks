import { db } from "../db.js";

export const getAllCategoriesFromDB = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM categories", [], (err, rows) => {
      if (err) return reject(err);
      else resolve(rows);
    });
  });
};

export const addCategoryToDB = (catData) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO categories (name)
     VALUES (?)`,
      [catData.name],
      function (err) {
        if (err) return reject(err);
        resolve({ id: this.lastID, ...catData });
      }
    );
  });
};

export const deleteCategoryFromDB = (id) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM categories WHERE id = ?`, [id], function (err) {
      if (err) return reject(err);
      resolve({ deleted: this.changes });
    });
  });
};
