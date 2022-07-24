import app from "../index";
import resize from "../routes/apis/resizing";
import supertest from "supertest";

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

  it("gets the instructions endpoint", async () => {
    const response = await request.get(
      `/api/resizing?name=${imageName}&width=${imageWidth}&height=${imageHeight}.jpg`
    );
    expect(response.status).toBe(200);
  });
});
