const { expect } = require ("chai");
const { createCalculator } = require("./addSubtract");

describe ("createCalculator", () => {
    it("should return correct value with add", () => {
        let calculator = createCalculator();
        calculator.add(24);
        expect(calculator.get()).to.be.equal(24);
    });

    it("should return correct value with add and substract", () => {
        let calculator = createCalculator();
        calculator.add(100);
        calculator.subtract(5);
        expect(calculator.get()).to.be.equal(95);
    });

    it("should return NaN when input is string", () => {
        let calculator = createCalculator();
        calculator.add('not a valid input');
        expect(calculator.get()).to.be.NaN;
    });

    it("should parse string number value and return valid number", () => {
        let calculator = createCalculator();
        calculator.add(2);
        calculator.add("98");
        expect(calculator.get()).to.be.equal(100);
    });
});