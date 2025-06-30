import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "./app.js";

describe("Express Server Routes", () => {
  it("GET /about should return about message", async () => {
    const res = await request(app).get("/about");
    expect(res.status).toBe(200);
    expect(res.text).toBe("I am a passionate web developer learning Express.js!");
  });

  it("GET /greet/:userName should greet with user name", async () => {
    const res1 = await request(app).get("/greet/Michael");
    const res2 = await request(app).get("/greet/Happiness");
    expect(res1.text).toBe("Hello, Michael! Welcome to my server.");
    expect(res2.text).toBe("Hello, Happiness! Welcome to my server.");
  });

  it("GET /favorite with fave query should respond with favorite thing", async () => {
    const res = await request(app).get("/favorite?fave=football");
    expect(res.text).toBe("My favorite sport is football.");
  });

  it("GET /favorite without query should notify missing fave", async () => {
    const res = await request(app).get("/favorite");
    expect(res.text).toBe("You didn't provide a favorite thing!");
  });

  it("GET /favorites with multiple queries", async () => {
    const res = await request(app).get("/favorites?color=blue&food=rice");
    expect(res.text).toBe("My favorite color is blue. My favorite food is rice.");
  });

  it("GET /favorites without queries", async () => {
    const res = await request(app).get("/favorites");
    expect(res.text).toBe("You didn't provide any favorites!");
  });

  it("POST /submit should return received message", async () => {
    const res = await request(app)
      .post("/submit")
      .send({ name: "Mike", email: "mike@example.com", message: "Hello!" });

    expect(res.text).toBe("Received: Name - Mike, Email - mike@example.com, Message - Hello!");
  });
});
