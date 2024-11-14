/*
let hero = document.querySelector("#hero");

hero.innerHTML = "<h1 align='center' id='h1'>Welcome <span id='span'>Aditya</span></h1>";

let heading = document.querySelector("h1");

heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "40px";
heading.style.padding = "15px 0px";
let changetext = document.querySelector("span");

setTimeout(() => {

    changetext.innerText = "Coder"
}, 3000);

setTimeout(() => {

    changetext.innerText = "Software DEveloper"
}, 6000);

setTimeout(() => {

    changetext.innerText = "Kharuti"
}, 9000);
*/


/*
//Practice 2

let heading = document.getElementById("heading");
console.log(heading);

heading.style.color = "red";
heading.style.textAlign = "center";
heading.style.fontSize = "40px";

heading.innerText = "I love Javascript";
*/



//practice 3: 

// let boxes = document.getElementById("boxes");
// console.log(boxes);

// let box1 = document.getElementById("box1");
// // console.log(allbox);

// box1.innerText = "ooo my god";

// let boxes = document.getElementsByClassName("box");

// boxes.item(0).innerHTML = "<h1> Goood Morning </h1>";
// boxes.item(1).innerHTML = "<h1> Goood Evening </h1>";
// boxes.item(2).innerHTML = "<h1> Goood Night </h1>";

// console.log(boxes.item(1));

//  let box = document.querySelector("h1");
//  box.style.color = "red";
//  box.style.padding = "10px 20px";

//  console.log(box.style);


/*
//Adding the element : 
let btn = document.createElement("button");
btn.innerText = "click me!";
// console.log(btn);

let box1 = document.getElementById("box1");
// box1.append(btn);

// box1.prepend(btn);

// box1.before(btn);

// box1.after(btn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Welcome to the JS </i>";

document.querySelector("body").prepend(newHeading);
*/


/*
//Practice : 
let button = document.createElement("button");

button.style.backgroundColor = "red";
button.style.color = "white";
button.style.padding = " 10px 25px";
button.setAttribute("id", "button");

button.innerText = "Click me !";

document.querySelector("body").prepend(button);
let btn = document.querySelector("button");

console.log(btn);
*/


/*
//Practice : Dark mode feature

let page = document.getElementById("page");

const light = () => {
    
    page.setAttribute("class", "light");
    console.log(page);
};

const dark = () => {
    
    page.setAttribute("class", "dark");
    console.log(page);
};
*/





