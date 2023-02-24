import express from "express";
import morgan from "morgan";
import cors from "cors";
import configDB from "./config/db";
import * as dotenv from "dotenv";
dotenv.config();
import {
  getMessages,
  postMessage,
  putMessage,
  deleteMessage,
} from "./controllers/messageController";

const app = express();

configDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/api", getMessages);
app.post("/api", postMessage);
app.put("/api/:id", putMessage);
app.delete("/api/:id", deleteMessage);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
