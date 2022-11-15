import express, { Express } from "express";
const app: Express = express();

app.use(express.json());

app.get("/test", (req, res) => {
  res.send("it works");
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
