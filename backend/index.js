import express from "express";
import { PORT, mongoDB } from "./confi.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRouter from "./routes/booksRouter.js"
import cors from "cors"

const app = express();

app.use(express.json());

app.use(cors({
  credentials:true
}));

app.use("/books",booksRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("App connected");
  })
  .catch((err) => {
    console.log(err)
  });
