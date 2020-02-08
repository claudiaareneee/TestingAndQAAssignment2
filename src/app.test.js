import {calculateBmi, calculateRetirement} from './app';

describe('calculateBmi', () => {
    it('should output "underweight"', () => {
        expect(calculateBmi(5, 3, 101.7)).toBe('BMI: 18.4 underweight');
        expect(calculateBmi(6, 2, 63.6)).toBe('BMI: 8.4 underweight');
        expect(calculateBmi(6, 2, 139.942)).toBe('BMI: 18.4 underweight');
    });
    
    it('should output "normal weight"', () => {
        expect(calculateBmi(5, 3, 125)).toBe('BMI: 22.7 normal weight');
        expect(calculateBmi(6, 2, 140.7)).toBe('BMI: 18.5 normal weight');
        expect(calculateBmi(6, 2, 189.654)).toBe('BMI: 24.9 normal weight');
    });
       
    it('should output "overweight"', () => {
        expect(calculateBmi(6, 2, 190.139)).toBe('BMI: 25.0 overweight');
        expect(calculateBmi(6, 2, 210)).toBe('BMI: 27.6 overweight');
        expect(calculateBmi(6, 2, 227.406)).toBe('BMI: 29.9 overweight');
        expect(calculateBmi(5, 3, 150)).toBe('BMI: 27.2 overweight');
    });
 
    it('should output obese', () => {
        expect(calculateBmi(5, 3, 165.375)).toBe('BMI: 30.0 obese');
        expect(calculateBmi(6, 2, 228.167)).toBe('BMI: 30.0 obese');
        expect(calculateBmi(6, 2, 231.18)).toBe('BMI: 30.4 obese');
    });
});

describe('calculateRetirement', () => {
    it('should calculate retirement age correctly', () => {
        expect(calculateRetirement(26,100000,10,1000000)).toBe("Retirement age: 101, Goal is unattainable");
        expect(calculateRetirement(32,100000,11,1000000)).toBe("Retirement age: 100, Goal is attainable");
        expect(calculateRetirement(32,101000,11,1000000)).toBe("Retirement age: 99, Goal is attainable");
    });
});