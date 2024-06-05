//create string 
let str = "AdityaRaje";
console.log(str);


//string length
console.log(str.length);


//Character positions
console.log(str.charAt(9)); //method 1
console.log(str[9]); // method 2


//Template literals
let object = {

    price : 100,
    id : 11,
};
let temp_literal1 = `The value of a is ${object.price}`;
let temp_literal2 = `The id of a is ${object.id}`;

console.log(temp_literal1,"\n",temp_literal2);


//String Methods
let str2 = "helloworld";
console.log(str2.toUpperCase());

let str3 = "HELLO";
console.log(str3.toLowerCase());

let str4 = "      Aditya Raje      ";
console.log(str4.trim());

let str5 = "0123456789";
console.log(str5.slice(2,7));

let res = str3.concat(str5);
console.log(res);

let str6 = "Hellow world";
console.log(str6.replace("world", "coding"));


//Practice : Create user name 
let input = prompt("Enter your full name (name & surname) : ");
let userName = `@${input}${input.length}`;
console.log(userName);