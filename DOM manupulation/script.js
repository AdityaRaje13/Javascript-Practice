/* 

Window object : 
This is the browsers object and it is automatically created by the browser.


Dom - Document Object Model :

+ All the HTML code is avilable in the Document object which is sub-object of the window object.
+ When the web page is loaded the document object model (DOM) is created of the page.

window => document => html => 1.<head> 2.<body>


*/

// // console.dir(document.body.childNodes[1].innerText = "Hello");
// document.body.style.backgroundColor = "pink";

// let heading = document.getElementById("h1");
// // console.log(heading);
// // heading.innerText = "Changed";

// setTimeout(() => {
//     heading.style.color = "blue";
// }, 3000);

// let titles = document.getElementsByClassName("heading"); //Returns the Html collection
// console.log(titles);



// const clicked = () => {

//     alert("The button is clicked");
// };


let elements = document.querySelector("#h1");
console.log(elements);

let a = document.querySelector(".elements");
console.log(a);


let m = document.querySelectorAll(".heading");
console.log(m);



//Properties : 

console.log(a.tagName);







