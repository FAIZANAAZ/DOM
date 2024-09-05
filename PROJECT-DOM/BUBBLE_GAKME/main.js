"use strict";
let hit = document.getElementById("hit");
let timer = document.getElementById("time");
let score = document.getElementById("score");
let btndiv = document.getElementById("btndiv");
let mainh1 = document.getElementById("mainh1");
let mainpre = document.getElementById("mainpre");
let startbtn = document.getElementById("startbtn");
let winloss = document.getElementById("winloss");
let scordiv = document.getElementById("scordiv");
let watch;
let interval;
let run = 0;
let btnadd = "";
let random;
// *******************************************************************************
winloss?.className;
function btnaddfun() {
    for (let i = 1; i < 51; i++) {
        random = Math.floor(Math.random() * 10 + 1);
        btnadd += `<button class=" ml-1 mb-1 w-[78px] h-[78px] hover:bg-yellow-200 bg-yellow-500 text-black text-[36px] border-solid border-red-700 border-[5px] font-semibold px-4 py-2 rounded-full">${random}</button>`;
        btndiv.innerHTML = btnadd;
    }
}
function hite() {
    btndiv?.addEventListener("click", () => {
        hit.textContent = Math.floor(Math.random() * 10 + 1);
        let changtext = btndiv.querySelector("button");
        changtext.textContent = random;
    });
}
function timmer() {
    timer.textContent = "TIMER START";
    watch = 60;
    interval = setInterval(() => {
        if (watch > 0) {
            --watch;
            timer.textContent = watch;
        }
        else {
            clearInterval(interval);
            endGame();
        }
    }, 1000);
}
function scorre() {
    btndiv?.addEventListener("click", (details) => {
        let targett = Number(details.target.textContent);
        if (targett == hit.textContent) {
            run += 5;
            score.textContent = run;
        }
    });
}
function endGame() {
    if (Number(timer?.textContent) == 0) {
        hit.textContent = "HIT 🎯";
        score.textContent = "SCORE 😎";
        timer.textContent = "TIMMER ⏲";
        btndiv.className = "hidden";
        // Score check ke liye score.textContent use karein aur parseInt se number mein convert karein
        if (Number(run) >= 35) {
            winloss.textContent = "🥳YOU WIN THE GAME🏆🥇"; // Lose message show ho ga
        }
        else {
            winloss.textContent = "YOU LOSS THE GAME 😥"; // Lose message show ho ga
        }
    }
}
btnaddfun();
hite();
scorre();
timmer();
