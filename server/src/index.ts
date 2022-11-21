import express, { Express } from "express";
require("dotenv").config();
const app: Express = express();

app.use(express.json());

const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
  const name: string = "Marat";
  res.send(`Hi ${name}`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
