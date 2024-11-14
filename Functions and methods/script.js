//Functions

/*

creating the function

function functionName()
{
    ---code---
}

+ Functions reduce the redundancy (repeatability)
+function executed only when it called

CallBack function : The function that executes for each element in the array.

*/

function myFunction() {
    console.log("This is my Function");
}
myFunction();


//Parameterised function
function parametrised(arg) {
    console.log(arg);
}
let a = "This is the input for parameterised function";
parametrised(a);


//Return the value
const returnFunction = (x, y) => {
    return (x * y);
}

let m = 10;
let n = 30;
let res = returnFunction(m, n);
console.log(res);


//Practice 1
// let userStr = prompt("Enter yor favorite sentence : ");
// let lowerStr = userStr.toLowerCase();
// let count = 0;
// const countVowel = (sentence) => {

//     for(let e of sentence){

//         if( e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u' ){
//             count++;
//         }
//     }

//     return count;
// }

// console.log("The number of vowels in your sentence are : ",countVowel(lowerStr));


//ForEach loop
let arr = ['aditya', 'ram', 'sita', 'geeta'];

arr.forEach((val, indexNo, array) => {

    console.log(val, indexNo, array);
});

/* 
Higher order functions or method : The function which take function as a parameter
or they return the function as their output.
*/


//Practice 2 : 
let nums = [10, 20, 30, 40, 50];

nums.forEach((num) => {

    console.log("The square of ", num, " is : ", num * num);
});


/* Important js methods */

//Map method

/*
+ Map creates the new array as output
+ Act similar to foreach loop

+ syntax :

arr.map((value, index, array) => {
    ---body---
});

*/

let arr2 = [11, 22, 33, 44, 55];

let newArr = arr2.map((val) => {

    return val * val;
});

console.log(newArr);


//filter method
let arr3 = [12, 13, 14, 15, 16];

let outputArr = arr3.filter((val) => {

    return val % 2 === 0;
});

console.log(outputArr);


//Reduce method 
let arr4 = [1, 2, 3, 4, 5];

let sum = arr4.reduce((prev, curr) => {

    return prev + curr;
});
console.log(sum);

let gratest = arr4.reduce((prev, curr) => {

    return prev > curr ? prev : curr;
});
console.log(gratest);


//Practice 3

let marks = [100, 98, 80, 87, 76, 99, 101];

let passMarks = marks.filter((mark) => {

    return mark > 90;
});
console.log(passMarks);

//practice 4

let input = prompt("Enter the value of n : ");
let arr5 = [];

const createArr = (n) => {

    for (let i = 1; i <= n; i++) {

        arr5.push(i);
    }
};

createArr(input);
console.log(arr5);

let multi = arr5.reduce((prev, curr) => {

    return prev * curr;
});
console.log(multi);



