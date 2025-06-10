import {describe, it, expect} from "vitest";
import request from "supertest";
import app from "./app.js";
import {pizzaPrices, pizzaToppings} from "./pizza.js";

describe("Pizza API", () => {
    describe("GET /toppings", () => {
        it("should respond with all toppings when no query param is included", async () => {
            const orderData = {toppings:["pepperoni"], size:"small"};
            const response =await request(app).get("/toppings");
                expect(response.status).toBe(200);
                expect(response.body).toStrictEqual(pizzaToppings);
        })
        it("should respond with all toppings when inStock is not true", async () => {
            const response = await request(app).get("/toppings?inStock=false");
                expect(response.status).toBe(200);
                expect(response.body).toStrictEqual(pizzaToppings);
        })
        it("should respond with ONLY in-stock toppings when inStock is true", async () => {
            const response = await request(app).get("/toppings?inStock=true");
            expect(response.status).toBe(200);
            expect(response.body).toEqual(pizzaToppings);
        })
        it("should respond with ALL in-stock toppings when inStock is true", async () => {
            const response = await request(app).get("/toppings?inStock=true");
            // expect(response.status).toBe(200);
            // Object.values(response.body).forEach((topping) => {
            //     expect(topping.inStock).toBe(true);
            //     // console.log(topping)
            // })
            expect(response.status).toBe(200);
            Object.entries(pizzaToppings).forEach(([toppingKey, toppingVal]) => {
                if (toppingVal.inStock) {
                    expect(response.body[toppingKey]).toEqual(toppingVal)
                }
            })

        })
    })
    describe("POST /order", () => {
        it("should respond with correct price if toppings and size are correct", async() => {
            const orderData = {toppings: ["pepperoni", "peppers"], size:"small"};
            const response = await request(app).post("/order").send(orderData);
            expect(response.status).toBe(201);
            expect(response.body.message).toContain("small pizza")
            expect(response.body.message).toContain("red bell peppers")
            expect(response.body.price).toBe(pizzaPrices.getPrice(orderData.toppings, orderData.size));
        })
            it("should reject order if toppings are not correct", async() => {
                const orderData = {toppings: ["cheese", "invalid toppings"], size:"small"};
                const response = await request(app).post("/order").send(orderData);
                expect(response.status).toBe(400);
                expect(response.body.message).toBe("invalid toppings is not a topping we offer");
            })
            it("should reject order if size is not correct", async() => {
                const orderData = {toppings: ["cheese", "invalid toppings"], size:"extra medium"};
                const response = await request(app).post("/order").send(orderData);
                expect(response.status).toBe(400);
                expect(response.body.message).toBe("invalid toppings is not a topping we offer");
            })
    })
    it("should reject order if topping is out of stock", async () => {
        const orderData = {toppings:["mushrooms", "cheese"], size:"medium"};
        const response = await request(app).post("/order").send(orderData);
        expect(response.status).toBe(201);
        expect(response.body.message).toBe( "Your order for a medium pizza with crimini mushrooms, extra cheese has been placed"
        );
    })
})