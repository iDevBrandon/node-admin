require('dotenv').config();
import express, { Request, Response } from "express";
import cors from "cors";
import { routes } from "./routes";
import { createConnection } from "typeorm";
import cookieParser from "cookie-parser";

createConnection().then((connection) => {
  // here you can start to work with your entities
  const port = process.env.PORT || 8000;
  const app = express();

  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      credentials: true, // Now FE can access the cookie
      origin: ["http://localhost:3000"],
    })
  );

  routes(app);

  app.listen(port, () => {
    console.log("listening on port " + port);
  });
});
