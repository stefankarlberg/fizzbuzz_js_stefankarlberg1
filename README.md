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
