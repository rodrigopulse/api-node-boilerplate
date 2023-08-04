import { type Request, type Response } from "express";
import User, { IUser } from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;
  try {
    const user: IUser | null = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "E-mail e/ou senha inválidos" });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT || "", {
      expiresIn: "1h",
    });

    if (token) {
      return res
        .status(200)
        .cookie("authToken", token, {
          httpOnly: true,
          secure: true,
          maxAge: 3600000 * 2000,
        })
        .json({ message: "Usuário conectado" });
    }

    return res.status(401).json({ message: "E-mail e/ou senha inválidos" });
  } catch (error) {
    return res.status(401).json({ message: "E-mail e/ou senha inválidos" });
  }
};
