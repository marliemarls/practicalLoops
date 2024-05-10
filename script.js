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
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0) {
            console.log("Fizz")
        } else if(i % 5 === 0) {
            console.log("Buzz")
        } else if((i % 3) && (i % 5) === 0) {
            console.log("FizzBuzz")
        } else {
            console.log(`${i}`)
        }
    }
}

console.log(fizzBuzz())

