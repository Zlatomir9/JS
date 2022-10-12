const PaymentPackage = require("../12.paymentPackage")
let { assert } = require("chai");

describe("PaymentPackage", () => {
    describe("create new instance", () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage("Test", 10);
        });

        it("name should be correct", () => {
           assert.equal(paymentPackage._name, "Test", "Name is correct"); 
        });
        it("value should be correct", () => {
            assert.equal(paymentPackage._value, 10, "Value is correct");
        });
        it("VAT should be set to correct initial value", () => {
            assert.equal(paymentPackage._VAT, 20, "VAT has correct default value");
            assert.equal(typeof(paymentPackage._VAT), "number", "VAT has correct type");
        });
        it("actice should be set to correct initial value", () => {
            assert.equal(paymentPackage._active, true, "Active has correct initial value");
            assert.equal(typeof(paymentPackage._active), "boolean", "Active has correct type");
        });
    });

    describe("test getters", () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage("Test", 10);
        });

        it("should return correct name", () => {
            assert.equal(paymentPackage.name, "Test");
        });
        it("should return correct value", () => {
            assert.equal(paymentPackage.value, 10);
        });
        it("should return correct VAT value", () => {
            assert.equal(paymentPackage.VAT, 20);
        });
        it("should return correct active value", () => {
            assert.equal(paymentPackage.active, true);
        });
    });

    describe("test setters", () => {
        it("should throw exception message when name value type is incorrect", () => {
            assert.throws(() => (new PaymentPackage(10, 10), 'Name must be a non-empty string'));
        });
        it("should throw exception message when name value is empty string", () => {
            assert.throws(() => (new PaymentPackage("", 10), 'Name must be a non-empty string'));
        });
        it("should set correct value to property name", () =>{
            let paymentPackage = new PaymentPackage("Test", 10);
            assert.equal(paymentPackage.name, "Test");
            paymentPackage.name = "changedName";
            assert.equal(paymentPackage.name, "changedName");
        });
        it("should throw exception message when value type is string", () => {
            assert.throws(() => {new PaymentPackage("Test", "fakeValue"), "Value must be a non-negative number"});
        });
        it("should throw exception message when value type is negative number", () => {
            assert.throws(() => {new PaymentPackage("Test", -50), "Value must be a non-negative number"});
        });
        it("should set correct value to property value", () => {
            let paymentPackage = new PaymentPackage("Test", 10);
            assert.equal(paymentPackage.value, 10);
            paymentPackage.value = 50;
            assert.equal(paymentPackage.value, 50);
            paymentPackage.value = 0;
            assert.equal(paymentPackage.value, 0);
        });
        it("should throw exception message when VAT type is string", () => {
            let paymentPackage = new PaymentPackage("Test", 10);
            assert.throws(() => {paymentPackage.VAT = "fakeValue", "VAT must be a non-negative number"});
        });
        it("should throw exception message when VAT is negative number", () => {
            let paymentPackage = new PaymentPackage("Test", 10);
            assert.throws(() => {paymentPackage.VAT = -100, "VAT must be a non-negative number"});
        });
        it("should set correct value to property VAT", () => {
            let paymentPackage = new PaymentPackage("Test", 20);
            assert.equal(paymentPackage.VAT, 20);
            paymentPackage.VAT = 50;
            assert.equal(paymentPackage.VAT, 50);
        });
        it("should throw exception message when active property is incorect type", () => {
            let paymentPackage = new PaymentPackage("Test", 10);
            assert.throws(() => {paymentPackage.active = "fakeValue", "Active status must be a boolean"});
        });
        it("should set correct value to property active", () => {
            let paymentPackage = new PaymentPackage("Test", 20);
            assert.equal(paymentPackage.active, true);
            paymentPackage.active = false;
            assert.equal(paymentPackage.active, false);
        });
    });

    describe("toString", () => {
        beforeEach(() => {
            paymentPackage = new PaymentPackage("Test", 10);
        });

        it("should test active state", () => {
            const output = [
                `Package: Test`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
            ].join("\n");
            assert.equal(paymentPackage.toString(), output);
        });

        it("should test not active state", () => {
            const output = [
                `Package: Test (inactive)`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
            ].join("\n");
            paymentPackage.active = false;
            assert.equal(paymentPackage.toString(), output);
        });
    });
});