//Synchronous and asynchrnous programming
/*

* Synchronous :
- In this type of programming code is executed in sequence.
- first line of code is executed then second is executed then third, fourthh and so on till the programm ends.

* Assynchronous : 
- In this type of programming, if any function or any statement need time to execute then the execution is 
move forward to the next line and the function which need time to execute is running parrellely and once done
it can print the output.

- for this purpose, we use various methods like async, await, promises etc.

*/


/*
//setTimeout Function Example : 

console.log("One");
console.log("two");

setTimeout(() => {
    console.log("printing after 4 seconds");
}, 4000);

console.log("Theree");
console.log("four");
*/


/*
*Callbacks : 

- Callbacks means passing the function as an argument in the other function

*/



/*
//callBack hell problem : 
const getData = (id, getNextData) => {
    setTimeout(() => {
        console.log("Data : ",id);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () =>{
    getData(2, () => {
        getData(3, () => {
            getData(4)
        })
    })
})
*/


/*
//Soliution for callBack hell - Promises : 
const asyncFun1 = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("I am coming after 2 seconds data ");
            // reject("Function is rejected");
        }, 2000);

    });
}

let p1 = asyncFun1();

console.log("Waiting data is coming");
p1.then((res) => {
    console.log(res);
})

p1.catch((err) => {
    console.log(err);
})
*/



//async-await

// async function rrr()
// {

//     let p1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Result 1 is printed");
//         },4000)
//     })

//     let p2 = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Result 2 is printed");
//         },8000)
//     })

//     console.log("Please wait 1st result is printing");
//     let a = await p1;
//     console.log("The 1 st result is : "+ a);

//     console.log("Please wait 2nd result is printing");
//     let b = await p2;
//     console.log("The 2nd result is : "+ b);
    
// }

/*
const getData = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Data fetched : ", id);
            resolve("success")
        }, 2000);
    });
}

async function fetchData() {

    console.log("fetching data 1 ");
    await getData(1);

    console.log("fetching data 2 ");
    await getData(2);

    console.log("fetching data 3 ");
    await getData(3);

}
*/



//IIFE : Immidietly invoked function expression

//Function calling itself without user

//example
/*

syntax 

(  function() {
    ---
} ) ();

or

(() => {
    ---
}) ();

or

(async () => {

})();

*/

//examples

(function(){
    
    setTimeout(() => {
        console.log("IIFE Calling itself automatically 1");
    }, 2000);
})();


(() => {
    setTimeout(() => {
        console.log("IIFE Calling itself automatically 2");
    }, 4000);
})();














