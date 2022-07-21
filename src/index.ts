import express from "express";
import fs from "fs";
import path from "path";
import resizeImage from "./utilities/manipulation";

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (_req, res) =>
  res.send(
    "use images from folder and use: http://localhost:3000/manipulate?name=IMG-NAME&width=POSITIVE-VALUE&height=POSITIVE-VALUE for manipulation"
  )
);

app.get("/manipulate", async (req, res) => {
  try {
    const imageName = req.query.name as unknown as string;
    const imageWidth = parseInt(req.query.width as unknown as string);
    const imageHeight = parseInt(req.query.height as unknown as string);
    const imageCachPath = `./public/imageCach/${imageName}-${imageWidth}x${imageHeight}.jpg`;
    // check cach first
    if (!fs.existsSync(imageCachPath)) {
      //call manipulation process
      await resizeImage(imageName, imageWidth, imageHeight);
      res.sendFile(path.resolve(imageCachPath));
    }
    res.sendFile(path.resolve(imageCachPath));
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT);

export default app;
