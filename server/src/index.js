import { app } from "./app.js";
import dotenv from "dotenv";
import { db } from "./db.js";
import { createTablesDB, fillDBWithMockdata } from "./db.js";

dotenv.config();

const PORT = process.env.PORT;

const start = async () => {
  await createTablesDB();
  await fillDBWithMockdata();

  const server = app.listen(PORT, () => {
    console.log(`Server runs on: http://localhost:${PORT}`);
  });

  process.on("SIGINT", () => {
    console.log("Close DB and server connection");
    db.close();
    server.close(() => {
      console.log("DB connection and server closed");
      process.exit(0);
    });
  });
};

start();
