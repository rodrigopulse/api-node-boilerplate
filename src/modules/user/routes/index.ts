import { type RequestHandler, Router } from "express";

import { register, login } from "../controllers/";

const UserRouter = Router();

UserRouter.post("/public/user/register", register as RequestHandler);

UserRouter.post("/public/user/login", login as RequestHandler);

export default UserRouter;
