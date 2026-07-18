const inventorySection = document.getElementById("inventory");
const inventoryTable = inventorySection.querySelector("table");
const addButton = document.createElement("button");
addButton.textContent = "Add New Product";
addButton.type = "button";
addButton.className = "button";
inventorySection.insertBefore(addButton, inventoryTable.parentElement);
addButton.addEventListener("click", function () {
    const name = prompt("Enter product name:");
    const stock = prompt("Enter available stock:");
    const price = prompt("Enter product price:");
    const grade = prompt("Enter quality grade:");
    if (!name || !stock || !price || !grade) {
        alert("Please enter all product information.");
        return;
    }
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const stockCell = document.createElement("td");
    const priceCell = document.createElement("td");
    const gradeCell = document.createElement("td");
    const statusCell = document.createElement("td");
    nameCell.textContent = name;
    stockCell.textContent = stock;
    priceCell.textContent = "RWF " + price;
    gradeCell.textContent = grade;
    statusCell.textContent = "Available";
    row.append(nameCell, stockCell, priceCell, gradeCell, statusCell);
    inventoryTable.querySelector("tbody").appendChild(row);
});