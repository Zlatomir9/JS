const StringBuilder = require("../13.string-builder")
const { assert } = require("chai");

describe("StringBuilder", () => {
    describe("constructor", () => {
        it("should work corectly with valid input", () => {
            let stringBuilder = new StringBuilder("test");
            assert.equal(stringBuilder.toString(), "test");
            assert.equal(stringBuilder._stringArray.length, 4);
        });
        it("should work corectly with empty string", () => {
            let stringBuilder = new StringBuilder("");
            assert.equal(stringBuilder.toString(), "");
            assert.equal(stringBuilder._stringArray.length, 0);
        });
        it("should work corectly with no input", () => {
            let stringBuilder = new StringBuilder();
            assert.equal(stringBuilder.toString(), "");
            assert.equal(stringBuilder._stringArray.length, 0);
        });
        it("should return empty string array with undefined", () => {
            let stringBuilder = new StringBuilder(undefined);
            assert.equal(stringBuilder._stringArray.length, 0);
        });
    });

    describe("input verification", () => {
        it("should throw exception if input is not a string", () => {
            let error = "Argument must be a string";

            assert.throws(() => { new StringBuilder([]), error });
            assert.throws(() => { new StringBuilder(1), error });
            assert.throws(() => { new StringBuilder({}), error });
            assert.throws(() => { new StringBuilder(false), error });
        });
    });

    describe("append(string) method", () => {
        it("should throw exception if input is not a string", () => {
            let stringBuilder = new StringBuilder("Test");
            let error = "Argument must be a string";

            assert.throws(() => { stringBuilder.append([]), error });
            assert.throws(() => { stringBuilder.append(1), error });
            assert.throws(() => { stringBuilder.append({}), error });
            assert.throws(() => { stringBuilder.append(true), error });
        });
        it("should append corectly", () => {
            let stringBuilder = new StringBuilder("Test");
            stringBuilder.append("123");
            assert.equal(stringBuilder.toString(), "Test123");
            stringBuilder.append("Test");
            assert.equal(stringBuilder.toString(), "Test123Test");
        });
    });

    describe("prepend(string) method", () => {
        it("should throw exception if input is not a string", () => {
            let stringBuilder = new StringBuilder("test");
            let error = "Argument must be a string";
            
            assert.throws(() => { stringBuilder.prepend([]), error });
            assert.throws(() => { stringBuilder.prepend(11), error });
            assert.throws(() => { stringBuilder.prepend({}), error });
            assert.throws(() => { stringBuilder.prepend(true), error });
        });

        it("should prepend corectly", () => {
            let stringBuilder = new StringBuilder("Test");
            stringBuilder.prepend("123");
            assert.equal(stringBuilder.toString(), "123Test");
            stringBuilder.prepend("not");
            assert.equal(stringBuilder.toString(), "not123Test");
        });
    });

    describe("insertAt(string, startIndex) method", () => {
        it("should throw exception if input is not a string", () => {
            let stringBuilder = new StringBuilder("test");
            let error = "Argument must be a string";

            assert.throws(() => { stringBuilder.insertAt([], 1), error });
            assert.throws(() => { stringBuilder.insertAt(1, 1), error });
            assert.throws(() => { stringBuilder.insertAt({}, 1), error });
            assert.throws(() => { stringBuilder.insertAt(false, 1), error });
        });
        it("should insert corectly", () => {
            let stringBuilder = new StringBuilder("Test");
            stringBuilder.insertAt("123", 3);
            assert.equal(stringBuilder.toString(), "Tes123t");
            stringBuilder.insertAt("1", 0);
            assert.equal(stringBuilder.toString(), "1Tes123t");
            stringBuilder.insertAt("t", 8);
            assert.equal(stringBuilder.toString(), "1Tes123tt");
        });
    });

    describe("remove(startIndex, length) method", () => {
        it("should remove corectly", () => {
            let stringBuilder = new StringBuilder("Test12345");
            stringBuilder.remove(0, 4);
            assert.equal(stringBuilder.toString(), "12345");
            stringBuilder.remove(4, 1);
            assert.equal(stringBuilder.toString(), "1234");
            stringBuilder.remove(1, 2);
            assert.equal(stringBuilder.toString(), "14");
        });
    });

    describe("tets the whole class", () => {
        it("should append, prepend, insert at given index and remove corectly", () => {
            let stringBuilder = new StringBuilder("Test");
            stringBuilder.append("1234");
            stringBuilder.prepend("12");
            stringBuilder.insertAt("TTT", 2);
            stringBuilder.remove(5, 4);
            assert.equal(stringBuilder.toString(), "12TTT1234");
        });
    });
});