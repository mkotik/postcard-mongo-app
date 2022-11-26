import express, { Express } from "express";
import mongoose from "mongoose";
import PostcardModel from "./models/Postcard";

const cors = require("cors");
require("dotenv").config();
const app: Express = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
  const name: string = "Marat";
  res.send(`Hi ${name}`);
});

app.get("/postcards", async (req, res) => {
  const allPostcards = await PostcardModel.find();
  res.json(allPostcards);
});

//delete a postcard
app.delete("/postcards/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const response = await PostcardModel.findByIdAndDelete(id);
  const allPostcards = await PostcardModel.find();
  res.json(allPostcards);
});

// upload new postcard
app.post("/postcards", async (req, res) => {
  const text: string = req.body.text;
  const newPostcard = new PostcardModel({ text });
  await newPostcard.save();
  const allPostcards = await PostcardModel.find();
  res.json(allPostcards);
});

app.put("/postcards/:id", async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  await PostcardModel.findByIdAndUpdate(id, { text: text });
  const allPostcards = await PostcardModel.find();
  res.json(allPostcards);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
