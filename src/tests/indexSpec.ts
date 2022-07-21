import app from "../index";
import resizeImage from "../utilities/manipulation";
import supertest from "supertest";

const request = supertest(app);

describe("Test endpoint responses", () => {
  it("gets the api endpoint", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
});

describe("Test resized image creation", () => {
  const imageName = "fjord";
  const imageWidth = 200;
  const imageHeight = 200;
  it("should create a resized image and be truthy", () => {
    expect(resizeImage(imageName, imageWidth, imageHeight)).toBeTruthy();
  });
});
