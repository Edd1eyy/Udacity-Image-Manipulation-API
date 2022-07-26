import sharp from "sharp";

const resizeImage = (
  name: string,
  width: number,
  height: number
): Promise<sharp.OutputInfo> => {
  const originalImagePath = `./public/images/${name}.jpg`;
  const cachImagePath = `./public/imageCach/${name}-${width}x${height}.jpg`;
  console.log(
    sharp(originalImagePath).resize(width, height).toFile(cachImagePath)
  );
  return sharp(originalImagePath).resize(width, height).toFile(cachImagePath);
};

export default resizeImage;
