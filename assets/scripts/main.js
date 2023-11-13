
let name = document.getElementById("nameInput");
let date = document.getElementById("dateInput");
let amount = document.getElementById("amountInput");
let addBtn = document.getElementById("addBtn");
let table = document.getElementById("table");


addBtn.addEventListener("click", () => {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    addContent(tr, th, name.value);
    createTable(tr, th);
})

function addContent(tr, th, content) {
    th.innerText += content;
    table.appendChild(tr);
    tr.appendChild(th);
}

function createTable(tr, th) {
    table.appendChild(tr);
    table.appendChild(th);
    th.innerText += "Name";
    th.innerText += "Date";
    th.innerText += "Amount";
}