const { FizzBuzz } =  require('../spec.helper')

describe('Fizz Buzz', () => {
    let fizzBuzz = new FizzBuzz

    it('returns a number if no game rules are met', () => {
    expect(fizzBuzz.check(1)).to.eql(1)
    })

    it('returns Buzz if number is divisible by 5', () => {
    expect(fizzBuzz.check(5)).to.eql('Buzz') 
    })

    it('returns FizzBuzz if number is divisible by 15', () => { 
    expect(fizzBuzz.check(15)).to.eql('FizzBuzz') 
    })

    it('returns error message if input is not a number between 1-100', () => { 
        expect(fizzBuzz.check('a')).to.eql('Man, how hard can it be to read the instructions!') 
        })
    
})

