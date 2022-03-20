import express, { Request, Response } from "express";
import cors from "cors";
import { routes } from "./routes";

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

routes(app);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello world");
// });

app.listen(port, () => {
  console.log("listening on port " + port);
});
