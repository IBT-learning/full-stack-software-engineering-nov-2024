import { describe, it, expect, beforeEach, vi } from "vitest";
import {render, screen, act, fireEvent, within} from "@testing-library/react";
import App from "./App.jsx";

describe("TODO APP", () => {
    beforeEach(() => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([]),
            })
        );
    });

    it("renders input and types into it", async () => {
        await act(() => {
            render(<App />);
        });

        const input = screen.getByPlaceholderText("Add a new task");
        expect(input).toBeTruthy();

        // const smallContainer = input.closest("div")

        fireEvent.change(input, { target: { value: "Do homework" } });
        expect(input.value).toBe("Do homework");

        const addButton = screen.getByRole("button", { name: /add/i });
        fireEvent.click(addButton);

        // Verify input is cleared
        expect(input.value).toBe("");

        // Check if new task appears
        const newTask = screen.getByText("Do homework");
        expect(newTask.textContent).toBe("Do homework");

        const element = await screen.findByText("Do homework");
        expect(element).toBeTruthy();
        expect(element.textContent).toBe("Do homework");

    });
    it("marks an item as complete and updates display", () => {
        render(<App />);

        const taskText = screen.getByText("wash the dishes");

        const taskItem = taskText.closest("li");

        const completeButton = within(taskItem).getByRole("button", { name: /mark complete/i });

        expect(taskText.classList.contains("line-through")).toBe(false);

        fireEvent.click(completeButton);

        expect(taskText.classList.contains("line-through")).toBe(true);
    });
});
