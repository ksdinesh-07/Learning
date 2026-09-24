const {calculate_fee,calculate_final_amount} = require("../src/transaction");
const { expect } = require("chai");


describe("Transaction calculations", () => {
    test("calculate fee", () => {
        const result =calculate_fee(1000);
        expect(result).toBe(20);
    });
});

//mocha , chai
describe("Transaction calculations", () => {
    it("should calculate transaction fee", () => {
        const result=calculate_fee(1000);
        expect(result).to.equal(20);
    });
    it("should calculate final transaction amount", () => {
        const result=calculate_final_amount(1000);
        expect(result).to.equal(1020);
    });
});

test("calculate transaction fee for 1000", () => {
    const result =calculate_fee(1000);
    expect(result).toBe(20);
});

test("calculate fee for 500", () => {
    const result =calculate_fee(500);
    expect(result).toBe(10);
});


test("calculate final transaction amount for 1000", () => {
    const result=calculate_final_amount(1000);
    expect(result).toBe(1020);
});


test("calculate final amount for 500", () => {
    const result=calculate_final_amount(500);
    expect(result).toBe(510);
});

