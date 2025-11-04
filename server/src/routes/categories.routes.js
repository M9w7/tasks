import { Router } from "express";
import {
  getAllCategories,
  createCategory,
  deleteCategory,
} from "../controllers/categories.controller.js";

const router = Router();

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Show all categories
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: List of all categories
 */
router.get("/", getAllCategories);

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Add new category
 *     tags:
 *       - Categories
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: category added
 */
router.post("/", createCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *   delete:
 *     summary: Delete category
 *     tags:
 *       - Categories
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: category deleted
 */
router.delete("/:id", deleteCategory);

export default router;
