"use strict";
let button = document.querySelectorAll('button');
let myScreen = document.getElementById('myScreen');
button.forEach((b) => {
    b.addEventListener('click', (event) => {
        if (event.target.textContent == "AC") {
            myScreen.value = "";
        }
        else if (event.target.textContent == "DE") {
            myScreen.value = (myScreen.value).slice(0, -1);
        }
        else if (event.target.textContent == "=") {
            myScreen.value = eval(myScreen.value);
        }
        if (!(event.target.textContent == "AC" || event.target.textContent == "DE" || event.target.textContent == "=")) {
            myScreen.value += event.target.textContent;
        }
    });
});
