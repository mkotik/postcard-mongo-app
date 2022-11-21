import express, { Express } from "express";
import mongoose from "mongoose";
import PostcardSchema from "./models/Postcard";

require("dotenv").config();
const app: Express = express();

app.use(express.json());

const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
  const name: string = "Marat";
  res.send(`Hi ${name}`);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
