import { type RequestHandler, Router } from "express";

import { register } from "@controllers/user";

const UserRouter = Router();

UserRouter.post("/public/users/register", register as RequestHandler);

export default UserRouter;
