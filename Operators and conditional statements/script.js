let age = 36;

let result = age > 18 ? "Adult" : "Child";

console.log(result);

// Practice 1

// let num = prompt("Enter a number : ");

// if(num % 5 === 0)
// {
//     console.log( num ,"is divisible by 5");
// }

// else
// {
//     console.log( num ,"is not divisible by 5");
// }

//Practice 2

// let marks = prompt("Enter your marks to check the Garde ");

// if(marks <= 100 && marks >= 80)
// {
//     console.log(marks, " marks belogs to A grade");
// }

// else if(marks <= 79 && marks >= 70)
// {
//     console.log(marks, " marks belogs to B grade");
// }

// else if(marks <= 69 && marks >= 60)
// {
//     console.log(marks, " marks belogs to C grade");
// }

// else if(marks <= 59 && marks >= 50)
// {
//     console.log(marks, " marks belogs to D grade");
// }

// else if(marks <= 49 && marks >= 0)
// {
//     console.log(marks, " marks belogs to F grade");
// }
// else
// {
//     console.log("Enter correct marks (0 - 100)");
// }

//practice 3

let fruit = prompt("Enter fruit name : ");

let res = fruit.toLowerCase();

switch (res) {

    case "mango":
        {
            console.log("Your fruit matches in case 1");
            break;
        }

    case "orange":
        {
            console.log("Your fruit matches in case 2");
            break;
        }

    case "banana":
        {
            console.log("Your fruit matches in case 3");
            break;
        }
    
    default : 
        {
            console.log("Your fruit not matched");
        }

}