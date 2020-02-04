import {hello, calculateBmi} from './app';

console.log(hello());

describe('hello', ()=>{
    it('should output hello', () => {
        expect(hello()).toBe('hello');
    })
})

// TODO: ASK ABOUT ROUNDING 5 11 215
describe('calculateBmi', () => {
    it('should output "underweight"', () => {
        expect(calculateBmi(5, 8, 110)).toBe('underweight');
        expect(calculateBmi(6, 4, 150)).toBe('underweight');
        expect(calculateBmi(5, 2, 100)).toBe('underweight');
    });
    
    it('should not output "underweight"', () => {
        expect(calculateBmi(5, 2, 105)).not.toBe('underweight');
        expect(calculateBmi(5, 10, 195)).not.toBe('underweight');
        expect(calculateBmi(6, 4, 155)).not.toBe('underweight');
    });
    
    it('should output "normal weight"', () => {
        expect(calculateBmi(5, 0, 100)).toBe('normal weight');
        expect(calculateBmi(5, 6, 150)).toBe('normal weight');
        expect(calculateBmi(6, 4, 155)).toBe('normal weight');
    });
    
    it('should not output "normal weight"', () => {
        expect(calculateBmi(5, 8, 110)).not.toBe('normal weight');
        expect(calculateBmi(5, 8, 175)).not.toBe('normal weight');
        expect(calculateBmi(5, 11, 215)).not.toBe('normal weight');
    });
    
    it('should output "overweight"', () => {
        expect(calculateBmi(5, 0, 130)).toBe('overweight');
        expect(calculateBmi(5, 6, 184)).toBe('overweight');
        expect(calculateBmi(5, 11, 180)).toBe('overweight');
    });
    
    it('should not output "overweight"', () => {
        expect(calculateBmi(5, 8, 110)).not.toBe('overweight');
        expect(calculateBmi(5, 6, 150)).not.toBe('overweight');
        expect(calculateBmi(5, 11, 215.5)).not.toBe('overweight');
    });
    
    it('should output obese', () => {
        expect(calculateBmi(5, 0, 155)).toBe('obese');
        expect(calculateBmi(5, 6, 190)).toBe('obese');
        expect(calculateBmi(5, 11, 215.5)).toBe('obese');
    });
    
    it('should not output obese', () => {
        expect(calculateBmi(5, 8, 110)).not.toBe('obese');
        expect(calculateBmi(5, 6, 150)).not.toBe('obese');
        expect(calculateBmi(5, 11, 180)).not.toBe('obese');
    });
});