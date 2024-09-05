"use strict";
let mybtn1 = document.querySelector(".btn1");
let input1 = document.querySelector(".fbox");
let textlist = document.querySelector(".textlist");
let delet_btn = document.querySelector(".dlelt");
let increment = 0;
let alertt = document.querySelector("pre");
function add() {
    if (input1.value == "") {
        alertt.style.display = "block";
    }
    else {
        alertt.style.display = "none";
        let newlist = document.createElement("newinput");
        newlist.innerHTML = `${++increment})   ${input1.value} <a class="delet">❌</a> `;
        textlist.appendChild(newlist);
        newlist.style.display = "block";
        input1.value = "";
        // ****************************************
        let delet = newlist.querySelector(".delet");
        delet?.addEventListener("click", () => {
            newlist.remove();
            --increment;
        });
    }
}
