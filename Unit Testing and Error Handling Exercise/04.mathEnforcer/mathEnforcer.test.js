const { expect } = require ("chai");
const { mathEnforcer } = require("./mathEnforcer");

describe("mathEnforcer", () => {

    it("should return undefined if addFive takes string argument", () => {
        expect(mathEnforcer.addFive("number")).to.be.undefined;
    });

    it("should return correct number with func addFive positive input", () => {
        expect(mathEnforcer.addFive(1)).to.equal(6);
    });

    it("should return correct number with func addFive negative input", () => {
        expect(mathEnforcer.addFive(-50)).to.equal(-45);
    });

    it("should return correct number with func addFive float input", () => {
        expect(mathEnforcer.addFive(1.1)).to.equal(6.1);
    });

    it("should return undefined if substractTen takes string argument", () => {
        expect(mathEnforcer.subtractTen("number")).to.be.undefined;
    });

    it("should return correct number with func substractTen positive input", () => {
        expect(mathEnforcer.subtractTen(20)).to.equal(10);
    });

    it("should return correct number with func substractTen negative input", () => {
        expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
    });

    it("should return correct number with func substractTen float input", () => {
        expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
    });

    it("should return undefined if sum take num1 string argument", () => {
        expect(mathEnforcer.sum("number", 1)).to.be.undefined;
    });

    it("should return undefined if sum take num2 string argument", () => {
        expect(mathEnforcer.sum(1, "number")).to.be.undefined;
    });

    it("should return undefined if sum takes two string arguments", () => {
        expect(mathEnforcer.sum("number", "number")).to.be.undefined;
    });

    it("should return correct sum", () => {
        expect(mathEnforcer.sum(20, 4)).to.equal(24);
    });

    it("should return correct sum with negative and positive input", () => {
        expect(mathEnforcer.sum(-2, 4)).to.equal(2);
    });

    it("should return correct sum with float numbers input", () => {
        expect(mathEnforcer.sum(2.7, 3.3)).to.equal(6);
    });
});