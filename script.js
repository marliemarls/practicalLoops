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
        if ((i % 3) && (i % 5) === 0) {
            console.log("FizzBuzz")
        } else if(i % 5 === 0) {
            console.log("Buzz")
        } else if(i % 3 === 0) { /*I could have used 15 but i wanted to showcase my use of the && operator*/
            console.log("Fizz")
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
//the function will work by taking in a number and then iterating from that number to the next prime number. 
//in that case, the index will not begin at 0, rather it will begin at the given number
//once the for loop iterates to the next number, it will check to see if it is a prime number through the use of conditions that must be met. if conditions are not met, the loop will continue to iterate, but once it finds the next prime, the function will complete and return the value.

//below here is my actual work and underneath is the code along with jose

// function isPrime(n){
//     if((n / n === 1) && (n / 1 === n) && (n % 2 === 0)) {
//         for(let i = n;  ;i++)
//         console.log("this number is not a prime ")
        
//     } else{
//         console.log("this number is a prime number")
//     }

// }

// isPrime(3)

function checkPrime(num){
    let i = 2;
    while(i < num){
        if(num % i === 0){ 
            return false;
        }
        i++
    }
    return true;
}

function findNextNum(startingNum){
    let starting = startingNum + 1;
    while(starting){
        if(checkPrime(starting)) {
            break;
        }
        starting++;
    }
    return starting;
}


console.log(findNextNum(9))


// //part 3: feeling loopy 

// function loopThruStrings(str) {
//     let arr = [];
//     for(let i = 0; i <= str.length; i++) {
//         // let newArray = [];
//         if(str[i] === '\n' ) {
//             const newStr = '';
//         } else {
//             const newArr =+ str[i];
//             arr =+ newArr
//         }
//         // return arr
//     }
// }

// let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// console.log(loopThruStrings(str))