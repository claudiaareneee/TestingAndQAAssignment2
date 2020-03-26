const operations = require('./operations.js');
const assert = require('assert');

it('should output "underweight"', () => {
    assert.equal(operations.calculateBmi(5, 3, 101.7), 'BMI: 18.4 underweight');
    assert.equal(operations.calculateBmi(6, 2, 63.6), 'BMI: 8.4 underweight');
    assert.equal(operations.calculateBmi(6, 2, 139.942), 'BMI: 18.4 underweight');
});

it('should output "normal weight"', () => {
    assert.equal(operations.calculateBmi(5, 3, 125), 'BMI: 22.7 normal weight');
    assert.equal(operations.calculateBmi(6, 2, 140.7), 'BMI: 18.5 normal weight');
    assert.equal(operations.calculateBmi(6, 2, 189.654), 'BMI: 24.9 normal weight');
});

it('should output "overweight"', () => {
    assert.equal(operations.calculateBmi(6, 2, 190.139), 'BMI: 25.0 overweight');
    assert.equal(operations.calculateBmi(6, 2, 210), 'BMI: 27.6 overweight');
    assert.equal(operations.calculateBmi(6, 2, 227.406), 'BMI: 29.9 overweight');
    assert.equal(operations.calculateBmi(5, 3, 150), 'BMI: 27.2 overweight');
});

it('should output obese', () => {
    assert.equal(operations.calculateBmi(5, 3, 165.375), 'BMI: 30.0 obese');
    assert.equal(operations.calculateBmi(6, 2, 228.167), 'BMI: 30.0 obese');
    assert.equal(operations.calculateBmi(6, 2, 231.18), 'BMI: 30.4 obese');
});



it('should calculate retirement age correctly', () => {
    assert.equal(operations.calculateRetirement(26,100000,10,1000000), "Retirement age: 101, Goal is unattainable");
    assert.equal(operations.calculateRetirement(32,100000,11,1000000), "Retirement age: 100, Goal is attainable");
    assert.equal(operations.calculateRetirement(32,101000,11,1000000), "Retirement age: 99, Goal is attainable");
});