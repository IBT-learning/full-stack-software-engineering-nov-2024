import request from "supertest";
import { describe, expect, it } from "vitest";
import app from "./app";

describe("GET /about", () => {
  it("should respond with Hi! there i am Patrick Uche a MERN stack developer", async () => {
    const response = await request(app).get("/about");
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual(
      "Hi! there i am Patrick Uche a MERN stack developer"
    );
  });
});

describe("GET /greet/:userName", () => {
  it("should response with the exact user's name", async () => {
    const userName = "Patutechz";
    const response = await request(app).get(`/greet/${userName}`);
    expect(response.body.message).toContain(`${userName}`);
  });
});

describe("GET /favorite", () => {
  it("should respond with a string if no favorite color or food is provided", async () => {
    const response = await request(app).get(`/favorite`);
    expect(response.body.message).toBe("No Favourite color and food :-(");
  });

  it("should respond with the the favorite information if provided", async () => {
    const color = "blue";
    const food = "yam"
    const response = await request(app).get(`/favorite?color=${color}&food=${food}`);
    console.log(response.body.message)
    expect(response.body.message).toBe(
      `My favorite color is ${color}. My favorite food is ${food}`
    );
  });
});
