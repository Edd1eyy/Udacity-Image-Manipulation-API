import sharp from "sharp";

const resizeImage = (name: string, width: number, height: number) => {
  const originalImagePath = `./public/images/${name}.jpg`;
  const cachImagePath = `./public/imageCach/${name}-${width}x${height}.jpg`;

  return sharp(originalImagePath).resize(width, height).toFile(cachImagePath);
};

export default resizeImage;
