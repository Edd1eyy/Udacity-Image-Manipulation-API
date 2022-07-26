import express from "express";

const app = express();

const instruct = app.get("/", (_req: express.Request, res: express.Response) =>
  res.send(
    "use images from folder and use: http://localhost:3000/api/resizing?name=IMG-NAME&width=POSITIVE-VALUE&height=POSITIVE-VALUE.jpg for manipulation"
  )
);

export default instruct;
