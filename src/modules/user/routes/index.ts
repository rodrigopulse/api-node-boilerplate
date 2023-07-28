import { type RequestHandler, Router } from "express";

import Register from "../controllers/register";

const UserRouter = Router();

// Public
UserRouter.post("/public/user/register", Register as RequestHandler);

export default UserRouter;
