import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import { setupSwagger } from "./swagger.js";

export const app = express();

app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  })
);
app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.use("/api/categories", categoriesRoutes);

setupSwagger(app);
