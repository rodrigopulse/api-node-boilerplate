import { type Request, type Response } from "express";
import { Router } from "express";
import UserRouter from "@modules/user/routes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Bem Vindo" });
});

router.use(UserRouter);

export default router;
