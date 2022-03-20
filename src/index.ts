import express, { Request, Response } from "express";
import cors from "cors";
let port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
