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

## Question 4

**Please explain why we are moving (number % 5 === 0) to the top?**

**Answer:**  The function will break out of the "if-else" once the number of 5 has been satisfied. In this case

---

## Question 5

**please explain the difference between feature and unit test**

**Answer:**  The feature test runs from a more of a users perspective, to try out larger blocks of code. The unit test are more from the programmers perspective where yoy test smaller blocks of code

---

## Question 6

**Please explain what this following code does**


```
describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })
})
 ```
**Answer:**  It opens and closes the web browser (where feature test runs in). 


---

## Question 7

**Please explain what expectations in the context of testing are**

**Answer:** We use expectations to compare input data with the output of a test. 

For example, we expect something to be (in this case equal):

```
expect(fizzBuzz.check(15)).to.eql('FizzBuzz') 
```

---

## Question 8

**Please write a line to line explanation of what is happening in this code**


```
<script src="./js/fizz-buzz.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let button = document.getElementById('button')
            let displayDiv = document.getElementById('display_answer')
            button.addEventListener('click', () =>{
                let value = document.getElementById('value').value
                let fizzBuzz = new FizzBuzz
                let result = fizzBuzz.check(value)
                displayDiv.innerHTML = result;
            })
        })
    </script>
 ```
**Answer:**  When DOM i loaded it listens after someone to press the check-button. It then passes in the value (via document.getElementById('value')) to our function FizzBuzz, that checks conditions and returns a certain string if they are met up. The last code-line outputs it in index.html.


---



## Question 9

**Please explain what a CDN (Content Delivery Network) is?**

**Answer:** Cloud-based services that deliver pages and other Web contents to users all over the world.

---