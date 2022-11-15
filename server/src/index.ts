import express, { Express } from "express";
const app: Express = express();

app.use(express.json());

app.get("/test", (req, res) => {
  const name: string = "Marat";
  res.send(`Hi ${name}`);
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
