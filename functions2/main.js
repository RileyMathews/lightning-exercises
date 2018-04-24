//app to take numbers into functions and add or subtract them

//function for addition

const add = (first, second) => console.log(first+second);

//function for subtraction
const subtract = (first, second) => console.log(first-second);

//calculate function
const calculate = (first, second, operation) => {
    operation(first, second);
}

//calling functions
calculate(2, 2, add);
calculate(200, 156, subtract);