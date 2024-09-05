"use strict";
/////////////////////////CATCH/////////////////////////////////////////////////////////////
let pra = document.querySelector(".pr");
let onbtn = document.querySelector("#btn1");
let offbtn = document.querySelector("#btn2");
let watch = document.querySelector(".watch");
///////////////////////////VARIABLE////////////////////////////////////////////////////////
let sec = 0;
let min = 0;
let hrs = 0;
let currenttime = 0;
let interval;
let pasedtime = Date.now();
onbtn?.addEventListener("click", () => {
    pasedtime = Date.now();
    interval = setInterval(() => {
        currenttime = Date.now();
        sec = Math.floor((currenttime - pasedtime) / 1000) % 60;
        min = Math.floor((currenttime - pasedtime) / (1000 * 60)) % 60;
        hrs = Math.floor((currenttime - pasedtime) / (1000 * 60 * 60)) % 60;
        sec = zerset(sec);
        min = zerset(min);
        hrs = zerset(hrs);
        pra.textContent = `${hrs}:${min}:${sec}`;
        function zerset(unit) {
            if (unit > 9) {
                return unit;
            }
            else {
                return "0" + unit;
            }
        }
    }, 1000);
    watch?.classList.add("rotating");
});
offbtn?.addEventListener("click", () => {
    sec = 0;
    min = 0;
    hrs = 0;
    currenttime = 0;
    clearInterval(interval);
    sec = zerset(sec);
    min = zerset(min);
    hrs = zerset(hrs);
    pra.textContent = `${hrs}:${min}:${sec}`;
    function zerset(unit) {
        if (unit > 9) {
            return unit;
        }
        else {
            return "0" + unit;
        }
    }
    // Remove the class to stop the rotation
    watch?.classList.remove("rotating");
    pra.textContent = "00:00:00";
});
