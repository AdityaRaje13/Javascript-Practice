let url = "https://hn.algolia.com/api/v1/search?";
let body = document.querySelector("body");

let author = document.getElementById("author");
let title = document.getElementById("title");
let link = document.getElementById("link");

let hits = [];

const getData = async () => {

    let response = await fetch(url);

    let result = await response.json();

    // console.log(result);

    // console.log(result.hits[0].title);

    hits = result.hits;

    // console.log(hits);

    hits.forEach((hit) => {

        console.log(hit.author);
        console.log(hit.title);
        console.log(hit.url);
    })

}