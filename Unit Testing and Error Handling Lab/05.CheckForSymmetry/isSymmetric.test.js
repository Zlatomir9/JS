const { expect } = require ("chai");
const { isSymmetric } = require("./checkForSymmetry");

describe("isSymmetric", () => {

    it("should return false if input is not an array", () => {
        let input = 'Not array';
        let result = isSymmetric(input);
        expect(result).to.be.false;
    });

    it("should return false if input is not symetric", () => {
        let input = [1, 2, 3];
        let result = isSymmetric(input);
        expect(result).to.be.false;
    });

    it("should return true if input is an symetric even count array", () => {
        let input = [1, 2, 3, 4, 3, 2, 1];
        let result = isSymmetric(input);
        expect(result).to.be.true;
    });

    it("should return true if input is an symetric odd count array", () => {
        let input = [1, 2, 2, 1];
        let result = isSymmetric(input);
        expect(result).to.be.true;
    });

    it("should return false if input array is not symetric", () => {
        let input = [1, 2, 3, 4, 3, 2];
        let result = isSymmetric(input);
        expect(result).to.be.false;
    });

    it("should return false if input array is mixed types", () => {
        let input = ["p", false, new Date(2022, 2, 3), "wa"];
        let result = isSymmetric(input);
        expect(result).to.be.false;
    });

    it("should return true on empty array", () => {
        let input = [];
        let result = isSymmetric(input);
        expect(result).to.be.true;
    });

    it("should return true on array with one element", () => {
        let input = [1];
        let result = isSymmetric(input);
        expect(result).to.be.true;
    });

    it("should return false on number and string array", () => {
        let input = ["1", 1];
        let result = isSymmetric(input);
        expect(result).to.be.false;
    });
});