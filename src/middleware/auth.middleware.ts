import { User } from "../entity/user.entity";
import { Request, Response } from "express";
import { getManager } from "typeorm";
import bcyptjs from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const jwt = req.cookies["jwt"];

    const payload: any = verify(jwt, process.env.SECRET_KEY);

    if (!payload) {
      return res.status(401).send({
        message: "Not authenticated",
      });
    }

    const repository = getManager().getRepository(User);

    req["user"] = await repository.findOne(payload.id); // set the user value in the request directly 

    next();
  } catch (e) {
    return res.status(401).send({
      message: "Not authenticated",
    });
  }
};
