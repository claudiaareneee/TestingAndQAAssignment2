import {hello} from './app';

console.log(hello());

describe('hello', ()=>{
    it('should output hello', () => {
        expect(hello()).toBe('hello');
    })
})
