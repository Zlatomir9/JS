const { expect, should } = require ("chai");
const { isOddOrEven } = require("./isOddOrEven");

describe("isOddOrEven", () => {
    it("should return odd", () => {
        expect(isOddOrEven("odd")).to.equal("odd");
    });

    it("should return even", () => {
        expect(isOddOrEven("even")).to.equal("even");
    });

    it("should return undefined if input is number", () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });

    it("should return undefined if input is object", () => {
        expect(isOddOrEven({w: 1})).to.be.undefined;
    });

    it("should return undefined if input is array", () => {
        expect(isOddOrEven([1, 2])).to.be.undefined;
    });
});