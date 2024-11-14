let amount;
let fromType;
let toType;
let currCode;
let btn = document.getElementById("change");

const url = 'https://community-neutrino-currency-conversion.p.rapidapi.com/convert';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '8dc1c202cemshb799da17a3e26d8p10d2fcjsn026d1d2e50cd',
		'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
	},
	body: new URLSearchParams({
		'from-value': `${amount}`,
		'from-type': `${fromType}`,
		'to-type': `${toType}`
	})
};

const getData = async () => {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

const updateFlag = (element) => {

	currCode = element.value;
	let country = countryList[currCode];
	let newSrc = `https://flagsapi.com/${country}/flat/64.png`;
	let img = element.parentElement.querySelector("img");
	img.src = newSrc;

}

let optionContainer = document.querySelectorAll(".dropdown select");

for (select of optionContainer) {

	for (let key in countryList) {

		let option = document.createElement("option");
		option.innerText = key;
		option.value = key;

		if (select.name === "from" && key === "USD") {
			option.selected = "selected";
		}

		if (select.name === "to" && key === "INR") {
			option.selected = "selected";
		}

		select.append(option);
	}

	select.addEventListener("change", (evt) => {

		updateFlag(evt.target);
		toType = evt.target.value;
		
	})

}

btn.addEventListener("click", (e) => {
	e.preventDefault();

	amount = document.getElementById("amount").value;
	if(amount === 0 || amount < 1){
		amount = 1;
	}
	
	fromType = document.getElementById("from").value;
	toType = document.getElementById("to").value;

	let msg = document.getElementById("msg");
	msg.innerText = `${amount} ${fromType}  =  --- ${toType}`;
	getData();
})

