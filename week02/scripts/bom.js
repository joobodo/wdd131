const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const deleteButton = document.createElement("button");

li.textContent = input.value;

deleteButton.setAttribute("aria-label", "Close");
deleteButton.setAttribute("id", "close-button");
deleteButton.textContent = "❌";

list.append(li);