const calculate = require('./script');

describe('Calculator Tests', () => {
    test('Addition works correctly', () => {
        expect(calculate(2, 3, 'add')).toBe(5);
    });

    test('Subtraction works correctly', () => {
        expect(calculate(5, 3, 'subtract')).toBe(2);
    });

    test('Multiplication works correctly', () => {
        expect(calculate(2, 3, 'multiply')).toBe(6);
    });

    test('Division works correctly', () => {
        expect(calculate(6, 3, 'divide')).toBe(2);
    });

    test('Division by zero returns error', () => {
        expect(calculate(6, 0, 'divide')).toBe('Error: Division by zero');
    });

    test('Natural logarithm works correctly', () => {
        expect(calculate(Math.E, 0, 'natural_logarithm')).toBeCloseTo(1, 5);
    });

    test('Exponential works correctly', () => {
        expect(calculate(1, 0, 'exponential')).toBeCloseTo(Math.exp(1), 5);
    });

    test('Invalid operation returns error', () => {
        expect(calculate(2, 3, 'invalid')).toBe('Invalid operation');
    });
});
