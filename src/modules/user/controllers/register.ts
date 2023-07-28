import { type Request, type Response } from "express";
import bcrypt from "bcrypt";
import User, { IUser } from "../models/User";

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: IUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res
      .status(201)
      .json({ message: "Usuário criado com sucesso", name: newUser.name });
  } catch (error) {
    if (error?.code === 11000) {
      return res
        .status(409)
        .json({ message: "Usuário já está cadastrado", code: error?.code });
    }
    return res.status(400).json({ message: "Ocorreu um erro no cadastro" });
  }
};

const Register = register;
export default Register;
