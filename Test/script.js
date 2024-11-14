const todayActivity = [];
let uniqueKey;

let btn = document.querySelector("#btn");
let viewBtn = document.querySelector("#view");
let addBtn = document.querySelector("#addbtn");
let addField = document.querySelector("#addField");
let i = 4;
let reset = document.querySelector("#res-btn");
let container = document.querySelector("#container");
let dataContainer = document.querySelector("#dataContainer");

function displayStoredData() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const data = JSON.parse(localStorage.getItem(key));

    let card = document.createElement("div");
    card.id = "card";

    for (let [idx, info] of data.entries()) {
      if (idx === 0) {
        let activity = document.createElement("p");
        activity.id = "date";
        activity.innerText = `Date :-  ${info}`;
        card.append(activity);
        dataContainer.append(card);
      } else {
        let activity = document.createElement("p");
        activity.id = "activity";
        activity.innerText = `${idx})  ${info}`;
        card.append(activity);
        dataContainer.append(card);
      }
    }
  }
}

btn.addEventListener("click", (evt) => {
  evt.preventDefault();

  let inputs = document.querySelectorAll(".data input");

  for (let input of inputs) {
    todayActivity.push(input.value);
  }

  uniqueKey = todayActivity[0];

  localStorage.setItem(uniqueKey, JSON.stringify(todayActivity));

  alert(`Your Activities are Saved for ${todayActivity[0]}`);

  window.location.reload();

  btn.disabled = "disable";
});

viewBtn.addEventListener("click", () => {
  displayStoredData();
  container.classList.add("hide");
  dataContainer.classList.remove("hide");
  dataContainer.classList.add("dataContainer");
  viewBtn.disabled = "disable";
});

addBtn.addEventListener("click", () => {
  let field = document.createElement("div");
  field.innerHTML = `<label for="data">Task ${i} : </label> <input type="text" id="data" required/>`;
  addField.append(field);
  i++;
});

reset.addEventListener("click", () => {
  window.location.reload();
});

const mainPage = () => {
  window.location.reload();
}

