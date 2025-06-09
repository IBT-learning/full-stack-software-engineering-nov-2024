import {describe, it, expect} from "vitest";
import {pizzaPrices, pizzaToppings} from "./pizza.js";

// describe("vitest test suite", () => {
//     it("runs on `npm test`", () => {
//         expect(true).toBe(true);
//     })
// })

describe("pizza pricing logic", () => {
    // it("should calculate correct price with no toppings", () => {
    //     const price = pizzaPrices.getPrice([], "large");
    //     expect(price).toBe(pizzaPrices.basePrices.large);
    // })
    //     it("should calculate correct price with multiple toppings", () => {
    //
    //         const price = pizzaPrices.getPrice(["cheese", "mushrooms"], "large");
    //         const expectedPrice = pizzaPrices.basePrices.large + pizzaToppings.cheese.price + pizzaToppings.mushrooms.price;
    //        expect(price).toBe(expectedPrice);
    //     })
    //             it("should show error for invalid size", () => {
    //                const priceRun = () => pizzaPrices.getPrice(["cheese", "mushrooms"], "big");
    //                expect(priceRun).toThrow();
    //                // expect(priceRun).toThrow("")
    //                //  expect(priceRun).toThrowError(Error())
    //             })
            it("should show error for invalid toppings", () => {
                expect(() =>
                pizzaPrices.getPrice(["invalid topping"], "small")
                ).toThrowError(Error("invalid topping is not a topping we offer"))
                expect(() =>
                pizzaPrices.getPrice(["PEPPERS"], "small")
                ).toThrowError(Error("PEPPERS is not a topping we offer"))
            })
})