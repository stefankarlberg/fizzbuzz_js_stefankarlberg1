function FizzBuzz() {
    this.check = (number) => {

        if (0 < number && number < 101)
        {
            if (number % 15 === 0) {
                return 'FizzBuzz';
            } else if (number % 5 === 0) {
                return 'Buzz';
            } else if (number % 3 === 0) {
                return 'Fizz';
            } else {
                return number
            }    
        } 
        else 
        {
            return 'Man, how hard can it be to read the instructions!'  
        }    
    }
}