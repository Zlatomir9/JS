const { expect } = require ("chai");
const { rgbToHexColor } = require("./rgb-to-hex");

describe("rgbToHexColor", () => {
    it("should return valid input", () => {
        expect(rgbToHexColor(240, 10, 10)).to.be.equal("#F00A0A");
    });
    
    it("should return valid input", () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
    });

    it("should return valid input", () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
    });

    it("should return undefined for negative red input", () => {
        expect(rgbToHexColor(-1, 100, 10)).to.be.equal(undefined);
    });

    it("should return undefined for negative green input", () => {
        expect(rgbToHexColor(100, - 1, 10)).to.be.equal(undefined);
    });

    it("should return undefined for negative blue input", () => {
        expect(rgbToHexColor(100, 10, - 1)).to.be.equal(undefined);
    });

    it("should return undefined for invalid red input", () => {
        expect(rgbToHexColor(300, 100, 10)).to.be.equal(undefined);
    });

    it("should return undefined for invalid green input", () => {
        expect(rgbToHexColor(100, 300, 10)).to.be.equal(undefined);
    });

    it("should return undefined for invalid blue input", () => {
        expect(rgbToHexColor(100, 10, 300)).to.be.equal(undefined);
    });

    it("should return undefined for float red number", () => {
        expect(rgbToHexColor(5.83, 0, 0)).to.be.equal(undefined);
    });

    it("should return undefined for float green number", () => {
        expect(rgbToHexColor(0, 7.89, 0)).to.be.equal(undefined);
    });

    it("should return undefined for float blue number", () => {
        expect(rgbToHexColor(0, 0, 15.18)).to.be.equal(undefined);
    });

    it('should return undefined for string value', () => {
        expect(rgbToHexColor("w", {w: 1}, [1, 2])).to.be.equal(undefined);
    });

    it("should return undefined for empty input", () => {
        expect(rgbToHexColor()).to.be.equal(undefined);
    });
});