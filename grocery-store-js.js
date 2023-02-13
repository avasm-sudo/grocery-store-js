let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = ("Grocery List");
bgContainerEl.appendChild(headingEl);

let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("list-container");
bgContainerEl.appendChild(listContainerEl)

let groceryItems = ["Milk", "Chocolates", "Biscuits", "Vegetables", "Icecreams", "Meals Pack"]
for (let groceryItem of groceryItems) {
    let listItemEl = document.createElement("li");
    listItemEl.textContent = groceryItem;
    listContainerEl.appendChild(listItemEl);

}

let checkBoxEl = document.createElement("input");
checkBoxEl.type = "checkbox";
checkBoxEl.id = "deliveryMode";
bgContainerEl.appendChild(checkBoxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", "deliveryMode");
labelEl.classList.add("delivery-mode-text");
labelEl.textContent = "Need Home Delivery";
bgContainerEl.appendChild(labelEl);

let brElement = document.createElement("br");
bgContainerEl.appendChild(brElement)

let buttonEl = document.createElement("button");
buttonEl.classList.add("btn", "btn-primary");
buttonEl.textContent = "Need to pay";
bgContainerEl.appendChild(buttonEl);