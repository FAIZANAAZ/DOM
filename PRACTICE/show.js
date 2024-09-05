"use strict";
let mybtn = document.querySelector(".btn");
let mydiv = document.querySelector(".div");
mybtn?.addEventListener("click", () => {
    if (mybtn.textContent == "SHOW") {
        mybtn.textContent = "HIDE";
        mydiv.style.opacity = "2";
        mydiv.style.height = "200px";
        mydiv.style.width = "200px";
        mydiv.style.transition = "height 3s , width 3s , fontSize 3s ,opacity 3s ,fontSize 7s";
        mydiv.style.fontSize = "20px";
        mydiv.textContent = `FAIZA
        NIMRA
        BISMA`;
    }
    else {
        mydiv.textContent = "";
        mybtn.textContent = "SHOW";
        mydiv.style.height = "0";
        mydiv.style.width = "0";
        mydiv.style.transition = "height 0s , width 0s";
        mydiv.style.opacity = "0";
        mydiv.style.fontSize = "0px";
        // ismy hm jb ak chiz dengy to osy dosri side dena lazmi he matlb agr hight show krny pr itni ho to ye bhi btana lazmi he ke show na krny pr wo 
        // kitni ho jay sb chizon ke liye wrna broswer me ak msla hota he ke wo apny ander any wali chizon ko save kr leta he or  jb hm dobara
        // wo button dabay hen to wo chiz kam ni krti yani bs ak bar kam krti he phir osko reload krna prhta he jesy
        // agr hmny transion di 3s ki show pr click krny pr to wo chly gi but jb hm hide pr click krengy to hmny agr hide ke liye transition nhi lgai
        // to wo apny ander save krlega ke hide me koi transition nhi he phir hm jb dobra click krengy show ki to wo transion ko nhi chlayga
        // kioky oski mamory save krlegi ke koi chiz nhi he 
        // memori srif on chizon ko save krti he jo ak jga di hen or dosri jga nhi or last waly element ko jesy if or elseif ko nhi blky wo else ko
        // chek krygi isi liye agr hmy koi chiz nhi chiye to else me hm wo chiz to likhengy but oko 0 ya none krdengy
    }
});
