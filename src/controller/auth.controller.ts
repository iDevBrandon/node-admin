import { Request, Response } from "express";
import { RegisterValidation } from "../validation/register.validation";
import { getManager } from "typeorm";
import { User } from "../entity/user.entity";
import bcyptjs from "bcryptjs";
import { sign } from "jsonwebtoken";

export const Register = async (req: Request, res: Response) => {
  const body = req.body;

  const { error } = RegisterValidation.validate(body);

  if (error) {
    return res.status(400).send(error.details);
  }

  if (body.password !== body.password_confirm) {
    return res.status(400).send({
      message: "Password's do not match",
    });
  }

  const repository = getManager().getRepository(User);

  const { password, ...user } = await repository.save({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    password: await bcyptjs.hash(body.password, 10),
  });

  res.send(user);
};

export const Login = async (req: Request, res: Response) => {
  const repository = getManager().getRepository(User);

  const user = await repository.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).send({
      message: "wrong user credentials!",
    });
  }

  if (!(await bcyptjs.compare(req.body.password, user.password))) {
    return res.status(400).send({
      message: "wrong password credentials!",
    });
  }

  const token = sign(
    {
      id: user.id,
    },
    "secret"
  );

  res.cookie("jwt", token, {
    httpOnly: true, // only BE can access to this cookie
    maxAge: 24 * 60 * 60 * 1000, // 1day
  });

  res.send({
    message: "Success",
  });
};
