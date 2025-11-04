import { Router } from "express";
import {
  getAllTasks,
  createTask,
  deleteTask,
  changeTask,
} from "../controllers/task.controller.js";

const router = Router();

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Show all tasks
 *     tags:
 *       - Tasks
 *     responses:
 *       200:
 *         description: List of all current tasks
 */
router.get("/", getAllTasks);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Add new task
 *     tags:
 *       - Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               startDate:
 *                 type: string
 *               dueDate:
 *                 type: string
 *               creator:
 *                 type: string
 *               category:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task added
 */
router.post("/", createTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update task
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               startDate:
 *                 type: string
 *               dueDate:
 *                 type: string
 *               creator:
 *                 type: string
 *               category:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Task updated
 */
router.put("/:id", changeTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete task
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Task deleted
 */
router.delete("/:id", deleteTask);

export default router;
