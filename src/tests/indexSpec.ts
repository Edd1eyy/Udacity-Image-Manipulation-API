import app from "../index";
import supertest from "supertest";
import resizeImage from "../utilities/manipulation";

const request = supertest(app);

describe("Test endpoint responses", () => {
  it("gets the api endpoint", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  });
  it("gets the instructions endpoint", async () => {
    const response = await request.get("/api/instructions");
    expect(response.status).toBe(200);
  });
});

describe("Test resize endpoint response", () => {
  const imageName = "fjord";
  const imageWidth = 200;
  const imageHeight = 200;

  it("gets the resize endpoint response", async () => {
    const response = await request.get(
      `/api/resizing?name=${imageName}&width=${imageWidth}&height=${imageHeight}.jpg`
    );
    expect(response.status).toBe(200);
  });
  it("checks the resize process is done", () => {
    const resizedImage = resizeImage(imageName, imageWidth, imageHeight);
    expect(resizedImage).toBeTruthy();
  });
});
