let arr = [10, 20, 30, 40, 50];
console.log(arr);

let str_arr = ['Adi', 'Manav', 'Ki', 'Jay', 'Ho'];
console.log(str_arr);

//Printing every element of array

let i;
let n = str_arr.length;

for(i = 0; i < n; i++)
{
    console.log(str_arr[i]);
}

//by using the for-of loop

for(let e of arr)
{
    console.log(e);
}

//Pracrtice 1 : Average

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
let len = marks.length;

for(let i = 0; i < len; i++)
{
    sum += marks[i];
}

let avg = sum / len;

console.log("The average of the marks is : ", avg);

// practice 2 : 10% off offer

let price = [250, 645, 300, 900, 500];

for(let i = 0; i < price.length; i++)
{
    price[i] = price[i] - price[i]*0.10;
}

console.log("After discount price is : ");
for(let res of price)
{
    console.log(res);
}


//Array Methods
let foodItems = ['patato', 'burger', 'pizza', 'chicken'];

// console.log(foodItems);
// console.log(foodItems.length);
// foodItems.push('chips');          //push method
// console.log(foodItems);
// console.log(foodItems.length);


// console.log(foodItems);
// console.log(foodItems.length);
// foodItems.pop('chicken');          //pop method
// console.log(foodItems);
// console.log(foodItems.length);


// console.log(foodItems.toString());    //toString Method


// foodItems.unshift('Banana');   //unshift method - add item at first
// console.log(foodItems);


// foodItems.shift();  //shift method- remove item from first 
// console.log(foodItems);


// let new_arr = foodItems.slice(1, 3);    //slice method
// console.log(new_arr);


// let arr2 = [1,2,3,4,5,6,7,8,9];
// arr2.splice(2, 3, 111);          
// console.log(arr2);