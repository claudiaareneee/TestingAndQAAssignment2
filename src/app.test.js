import {calculateBmi, calculateRetirement} from './app';

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

describe('calculateRetirement', () => {
    // age = (goal/(sallary*(percentageSaved+matchRate))) + age
    it('should report the correct age with percentage under or at .35', () => {
        expect(calculateRetirement(40,60000, .15,1000000)).toBeCloseTo(95.55, .05);
    });

    it('should report the correct age with percentage above .35', () => {
        
    });

    it('should report null when goal is unattainable', () => {
        expect(calculateRetirement(20, 16500, .15, 401000)).toBeNull();
        expect(calculateRetirement(30, 40000, .10, 604000)).toBeNull();
        expect(calculateRetirement(30, 40000, .10, 604000)).toBeNull();
        expect(calculateRetirement(40, 55000, .15, 1000000)).toBeNull();
    });

    it('should report null when current age is invalid', () => {
        expect(calculateRetirement("a", 100000, .20, 401000)).toBeNull();
        expect(calculateRetirement(-6, 100000, .20, 401000)).toBeNull();
        expect(calculateRetirement(100, 100000, .20, 401000)).toBeNull();
        expect(calculateRetirement({}, 100000, .20, 401000)).toBeNull();
    });

    it('should report null when salary is invalid', () => {
        expect(calculateRetirement(22, "100000", .20, 401000)).toBeNull();
        expect(calculateRetirement(22, -5, .20, 401000)).toBeNull();
        expect(calculateRetirement(22, 0, .20, 401000)).toBeNull();
        expect(calculateRetirement(22, false, .20, 401000)).toBeNull();
        expect(calculateRetirement(22, {}, .20, 401000)).toBeNull();
    });

    it('should report null when percentage is invalid', () => {
        expect(calculateRetirement(22, 100000, ".2", 401000)).toBeNull();
        expect(calculateRetirement(22, 100000, 101, 401000)).toBeNull();
        expect(calculateRetirement(22, 100000, -0.6, 401000)).toBeNull();
        expect(calculateRetirement(22, 100000, 0, 401000)).toBeNull();
        expect(calculateRetirement(22, 100000, {}, 401000)).toBeNull();
    });

    it('should report null when goal is invalid', () => {
        expect(calculateRetirement(22, 100000, .20, "401000")).toBeNull();
        expect(calculateRetirement(22, 100000, .20, -401000)).toBeNull();
        expect(calculateRetirement(22, 100000, .20, false)).toBeNull();
        expect(calculateRetirement(22, 100000, .20, {})).toBeNull();
    });
});