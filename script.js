//your code here
const table = document.getElementById("table");
const btn = document.getElementById("add")
const name = document.getElementById("item-name-input")
const price = document.getElementById("item-price-input")
const total= document.getElementById("total");
let sum = 0;

btn.addEventListener("click",() =>{
	tr = document.createElement("tr");
	td1 = document.createElement("td")
	td1.id = "item";
	td2.id = "price";
	td2 = document.createElement("td")
	td1.innerText = name.value;
	name.value = "";
	td2.innerText = price.value;
	sum += Number(price.value);
    total.innerText = sum;
	price.value = "";

	tr.append(td1,td2);
	table.append(tr);
	

	
})