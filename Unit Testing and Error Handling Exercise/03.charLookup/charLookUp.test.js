const { expect, should} = require ("chai");
const { lookupChar } = require("./charLookUp");

describe("lookupChar", () => {

    it("should return undefined if string and index are wrong types", () => {
        expect(lookupChar(1, "string")).to.be.undefined;
    });

    it("should return undefined if string is wrong type", () => {
        expect(lookupChar(1, 1)).to.be.undefined;
    });

    it("should return undefined if index is wrong type", () => {
        expect(lookupChar("string", "index")).to.be.undefined;
    });

    it("should return undefined if index is float", () => {
        expect(lookupChar("string", 3.5)).to.be.undefined;
    });

    it("should return `Incorrect index` if index is negative", () => {
        expect(lookupChar("string", -2)).to.equal("Incorrect index");
    });

    it("should return `Incorrect index` if index is greater than string length", () => {
        expect(lookupChar("string", 100)).to.equal("Incorrect index");
    });

    it("should return correct symbol", () => {
        expect(lookupChar("string", 3)).to.equal("i");
    });
});