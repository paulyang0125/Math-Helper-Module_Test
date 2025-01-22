function calculate(a, b, operation) {
    let result;
    switch (operation) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = b !== 0 ? a / b : 'Error: Division by zero';
            break;
        case 'natural_logarithm':
            result = a > 0 ? Math.log(a) : 'Error: Non-positive value for logarithm';
            break;
        case 'exponential':
            result = Math.exp(a);
            break;
        default:
            result = 'Invalid operation';
    }
    return result;
}

// Export for Jest testing
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = calculate;
}

// Attach to window for browser usage
if (typeof window !== 'undefined') {
    window.calculate = calculate;
}
