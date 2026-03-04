/* FizzBuzz */

const numbers = [200, 44, 112, 55, 6, 3, 5, 7, 8, 53, 35, 9, 7, 8, 3, 45, 4];

for (let i = 0; i < numbers.length; i++) {

    const element = numbers[i];

    if (element % 3 === 0 && element % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (element % 3 === 0) {
        console.log("Fizz");
    }
    else if (element % 5 === 0) {
        console.log("Buzz");
    }
    else{
        console.log("None");
    }
}

