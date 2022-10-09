const {expect} = require('chai');
const sum = require('./sumNumbers');

describe('Tests', () => {
    it('should return correct sum', () => {
        expect(sum([5, 5, 5, 10])).to.equal(25);
    });

    it('should return 0 when array is empty', () => {
        expect(sum([])).to.equal(0);
    });

    it('should return NaN when array is string', () => {
        expect(sum('haha')).to.be.NaN;
    });

    it('should return NaN when array have string element', () => {
        expect(sum(['10', 'no', '12'])).to.be.NaN;
    });

    it('should return sum of numbers in string array', () => {
        expect(sum(['7', '3', '1'])).to.equal(11);
    });
});