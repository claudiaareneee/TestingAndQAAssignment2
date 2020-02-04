import {hello, add} from './app';

console.log(hello());

describe('hello', ()=>{
    it('should output hello', () => {
        expect(hello()).toBe('hello');
    })
})

describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1,2)).toBe(3);
        expect(add(3,4)).toBe(7);
    });

    it('should not add strings', () => {
        expect(add("2", 2)).toBe(null);
    });

    it('should not add objects', () => {
        expect(add(2, {})).toBe(null);
    });

    it('should not add arrays', () => {
        expect(add(2, [])).toBe(null);
    });

});