import { Router } from "express";
import { Register } from "./contoller/auth.controller";

export const routes = (router: Router) => {
  router.post("/api/register", Register);
};
