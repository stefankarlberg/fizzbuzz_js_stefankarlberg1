# Fizzbuzz javascript weekend chellenge




## Question 1
**Explain what the following lines of code do?**

```
let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
```

**Answer:** It reads file fizz-buzz.js and adds module FizzBuzz to it. This is stored in the variable fizzBuzz.


---


## Question 2

**Why we are placing the let fizzBuzz = new FizzBuzz outside the it block?**

 **Answer:** So all the "it-blocks" in that "describe-block" can access that variable.



---


## Question 3

**Please explain the difference between using === and == in JS?**

 **Answer:** === Tripple equal are used to test for strict equality. Type and value have to absolulutely the same. == Double equal are more loose, a value can equals even if the types (int, string) are different.



---

