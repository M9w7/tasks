import {
  getAllCategoriesFromDB,
  addCategoryToDB,
  deleteCategoryFromDB,
} from "../services/categories.service.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await getAllCategoriesFromDB();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const newCategory = await addCategoryToDB(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const result = deleteCategoryFromDB(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
