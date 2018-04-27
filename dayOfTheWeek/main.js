// Exercise:
// 1. Create a variable to hold the value of the day of the week.

const date = new Date()
const day = date.getDay()
console.log(day)

// 2. Write a switch statement that will check the value of the variable. The switch statement will console log the following for each day of the week:
// Monday: "Happy Monday!"
// Tuesday: "It's Tuesday. You got this!"
// Wednesday:"Hump day already!"
// Thursday: "Just one more day 'til the weekend!"
// Friday: "Happy Friday!"
// Saturday: "Have a wonderful Saturday!"
// Sunday: "It's Sunday, time to relax!"

switch(day) {
    case 0:
        text = "It's Sunday, time to relax!" 
        break
    case 1:
        text = "Happy Monday!";
        break;
    case 2:
        text = "It's Tuesday. You got this!";
        break;
    case 3:
        text = "Hump day already!";
        break;
    case 4:
        text = "Just one more day 'til the weekend!";
        break;
    case 5:
        text = "Happy Friday!";
        break;
    case 6:
        text = "Have a wonderful Saturday!";
        break;
    default:
        text = "Plase specify a day of the week";
}

console.log(text)

// Challenge:
// Add a default case to the switch statement that console logs "Please specify a day of the week." Change the value of your variable to see your default case being executed.

// Advanced Challenge:
// Change the switch statement so that for all weekdays, it console logs "Weekday" and for Saturday and Sunday, it console.logs "Weekend"