import { describe, it, expect } from "vitest";

import {
    add,
    subtract,
    multiply,
    divide
} from "./calculator.js";

describe("Calculator Tests", () => {

    it("should add two numbers", () => {
        expect(add(10, 20)).toBe(30);
    });

    it("should subtract two numbers", () => {
        expect(subtract(20, 10)).toBe(10);
    });

    it("should multiply two numbers", () => {
        expect(multiply(5, 4)).toBe(20);
    });

    it("should divide two numbers", () => {
        expect(divide(20, 5)).toBe(4);
    });

    it("should reject division by zero", () => {
        expect(() => divide(10, 0))
            .toThrow("Cannot divide by zero");
    });

});