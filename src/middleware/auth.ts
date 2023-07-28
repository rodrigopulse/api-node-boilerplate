import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.authToken;
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  try {
    const decoded = jwt.verify(token.toString(), process.env.JWT || "") as {
      email: string;
    };
    if (decoded) {
      next();
    } else {
      return res.status(401).json({ message: "Token inválido" });
    }
  } catch (error) {
    console.error("Erro durante a verificação do token:", error);
    return res.status(401).json({ message: "Token inválido" });
  }
};

export default auth;
