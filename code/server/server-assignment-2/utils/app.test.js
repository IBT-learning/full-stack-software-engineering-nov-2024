import {describe, it, expect} from "vitest";
import request from "supertest";
import app from "../app.js";

describe("/ALL GET ENDPOINTS", () => {
    it("should check if string responds with the correct bio",async () => {
        const response =await request(app).get("/about");
        expect(response.body.message).toBe("This is me in my little world; lover of football and more.")
    })
    it("should check if response contains the exact user's name", async () => {
        const user = "Owen"
        const response = await request(app).get(`/greet/${user}`);
        expect(response.body.message).toContain(`${user}`);
    })
    it("should check if it responds with an approved information", async () => {
        const response = await request(app).get(`/greet/owen`);
        expect(response.body.message).toBe("Welcome, owen")
    })
    it("should respond with a string if no favorite object is provided", async () => {
        const response = await request(app).get(`/favorite`);
        expect(response.body.message).toBe("Please provide some favorite things in the query parameters.")
    })
    it("should respond with the the favorite information if provided", async () => {
        const response = await request(app).get(`/favorite?sport=football`);
        expect(response.body.message).toBe("My favorite sport is football");
    })
})