import express from "express";
import cookieParser from "cookie-parser";

import Router from "./routes";
import { connect } from "./db";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(Router);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.listen(process.env.API_PORT || 3333, async () => {
  try {
    await connect();
  } catch (error) {
    console.error(error);
  }
  console.log("[API] Rodando na porta 3333");
});
