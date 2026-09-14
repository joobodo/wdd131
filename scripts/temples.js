// temples.js

// ---- Footer: dynamic year + last modified ----
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

// ---- Hamburger menu toggle ----
// Step 1: select your button (id="menu-btn") and your nav list (id="nav-menu")
// Step 2: add a click event listener to the button
// Step 3: inside the listener:
//   - toggle the "hidden" class on the nav list (classList.toggle)
//   - swap the button's text between "☰" and "✕" so users know it's open/closed
//     (check the button's current textContent, then set it to the other symbol)

var menuButton = document.querySelector('#menu-btn');
var navList = document.querySelector('#nav-menu');

menuButton.addEventListener('click', () => {
  navList.classList.toggle('hidden');
  if (navList.classList.contains('hidden')) {
    menuButton.textContent = '☰';
  } else {
    menuButton.textContent = '✕';
  }
})
