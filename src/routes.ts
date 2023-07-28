import { type Request, type Response } from "express";
import { Router } from "express";
import UserRouter from "@modules/user/routes";
import auth from "@middleware/auth";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Bem Vindo" });
});

router.get("/private/auth-test", auth, (req: Request, res: Response) => {
  res.status(200).json({ message: "Token válido" });
});

router.use(UserRouter);

export default router;
