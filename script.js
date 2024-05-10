//part 1 of the lab
//fizz buzz
//looping through all numbers from 1-100
//if number divisble by 3, the function should console.log("fizz")
//if a number is divisible by 5, it should console "buzz"
// if divisible by both 3 && 5, it should print FizzBUzz
//every other number, should just print out as is

//create function fizzBuzz
//will not take in any parameters, and within the function, we will have a loop
//loop will iterate from 1 let i=1; i <= 100
//within the loop we are checking to see if the number is divisible by 3, 5 or both 3 & 5; 
//if the number does not fall under either of those circumstances, it will print as is
// otherwise, the number will be changed to fizz, buzz or fizzBuzz

function fizzBuzz(){
    for(let i = 1; i < 101; i++){
        let realNum = i;
        if(i % 3 === 0) {
            console.log("Fizz")
        } else if(i % 5 === 0) {
            console.log("Buzz")
        } else if((i % 3) && (i % 5) === 0) { /*I could have used 15 but i wanted to showcase my use of the && operator*/
            console.log("FizzBuzz")
        } else {
            console.log(i)
        }
        
    }
}
//i realized that when i console.logged my function, it was showing up as undefined, so i just invoked it and it worked perfectly
fizzBuzz()

//part 2: prime time

//the function should take in a number which will be named num or n
//prime number: a number that is only divisible by itself and 1
//we are checking to find the next prime number in sequence
// thus the function should give the next prime number up
//if the number given is 4, it should log 5, if n is 5
//to check if a number is prime, we should compare

function isPrime(n){
    if((n / n) && (n / 1) && (n / 2)) {
        console.log("this number is not a prime ")
    } else if(){
        console.log("this number is a prime number")
    }

}

isPrime(3)

//part 3: feeling loopy 