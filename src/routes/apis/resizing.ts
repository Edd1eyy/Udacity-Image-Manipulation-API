import express from "express";
import fs from "fs";
import path from "path";
import resizeImage from "../../utilities/manipulation";

const app = express();
app.use(express.static(__dirname + "/public"));

const resize = app.get(
  "/",
  async (req: express.Request, res: express.Response): Promise<void> => {
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
      res.send(
        `something went wrong, check inputs. maybe wrong name or non-positive dimensions. error:${
          (err as Error).message
        } `
      );
    }
  }
);

export default resize;
