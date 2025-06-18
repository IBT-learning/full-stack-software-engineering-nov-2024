import { describe, it, expect, vi, beforeEach } from "vitest";
import {render, screen, act, fireEvent} from "@testing-library/react";
import App from "../App.jsx";
import {pizzaPrices} from "../../../test-server/utils/pizza.js";


describe("Pizza Order App", () => {
    beforeEach(async () => {
        await act(() => {
            render(<App />);
        })
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([]),
            })
        );

        const allToppings = {
            olives: { name: "Olives", price: 1, vegetarian: true },
            pineapple: { name: "pineapple", price: 2, vegetarian: true },
            tripe: { name: "tripe", price: 3 },
        }

        global.fetch.mockImplementation(() => {
        return Promise.resolve({
            json: () => Promise.resolve(allToppings),
        })
        })
    });


    it("runs the test", () => {
        expect(true).toBe(true);
    });

    it("renders the app", async () => {
    });
    describe("size radio inputs ", async () => {
        it("renders pizza size input correctly", () => {
            const smallInput = screen.getByLabelText("small");
            expect(smallInput).toBeTruthy();
            expect(smallInput.type).toBe("radio")
            expect(smallInput.id).toBe("small")
            expect(smallInput.name).toBe("pizza-size")


            // Check that price is displayed...
            const smallContainer = smallInput.closest("div");
            const priceElement = smallContainer.querySelector(".item-price");
            expect(priceElement).toBeTruthy();
            expect(priceElement.textContent).toBe(`$${pizzaPrices.basePrices.small}`);
        })

        it('renders size inputs for all pizza sizes', () => {
            Object.keys(pizzaPrices.basePrices).forEach((size) => {
                const sizeInput = screen.getByLabelText(size);
                expect(sizeInput).toBeTruthy();
            })
        });

        it("allow selecting size", () => {
            const smallInput = screen.getByLabelText("small");
            fireEvent.click(smallInput);
            expect(smallInput.checked).toBe(true);
        })
    })
});
