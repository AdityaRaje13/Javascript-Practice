  // Event mangement : 
   /*

        1. Mouse events (click, double click etc.)
        2. Keyboard events (keypress, keyup, keydown)
        3. Form events (submit etc)
        4. Print event and many more
   */


    /*
    //onclick() :
    let btn = document.querySelector("#btn"); 

    btn.onclick = (e) => {

        alert("Hello Aditya");
        console.log(e);
        console.log(e.target);
        console.log(e.clientX);
        console.log(e.clientY);
    };

    let box = document.getElementById("box");
    box.style.backgroundColor = " red";
    box.style.padding = "20px 40px";
    box.style.height = "200px";
    box.style.width = "200px";

    box.onmouseover = () => {

        box.style.backgroundColor = " green";
    }

    box.onmouseout = () => {

        box.style.backgroundColor = " red";
    }

    */



//Event Listners : 
/*
Syntax : 

Node.addEventListener(evnt, callback); //to add
Node.removeEventListner(event, callback); //to remove
*/

// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {

//     alert("Hello javascript");
// });

// btn.addEventListener("click", () => {

//     btn.style.backgroundColor = "yellow";
//     btn.style.padding = "10px 20px";
// });


/*
//Practice dark mode and light mode : 
let btn = document.getElementById("btn");
let mode = "light";
let body = document.querySelector("body");

btn.addEventListener("click", () => {

    if(mode === "light"){

        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light")
    }
    else{

        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark")
    }

    console.log(mode);
});
*/







    
    