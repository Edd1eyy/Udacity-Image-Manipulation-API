import express from "express";
import resize from "./apis/resizing";
import instruct from "./apis/instructions";

const routes = express.Router();

// place all your endpoints in this router object
routes.get("/", (_req: express.Request, res: express.Response) => {
  res.send("this is the main api route, add /instructions for tips ");
});

routes.use("/instructions", instruct);
routes.use("/resizing", resize);

export default routes;
