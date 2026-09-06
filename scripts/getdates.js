let date = new Date();

let currentYear = document.querySelector("#currentyear");

currentYear.innerHTML = date.getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
