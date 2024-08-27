"use strict";
// body ko document ke bager target nhi kiya ja skta document.body
let myydiv = document.querySelector(".abc");
let myybtn = document.querySelector(".btn");
myydiv?.addEventListener("click", (e) => {
    console.log(e);
    // click event by default bhi hmy koch chizen detga he jo hm inspect krky dekh skty hen to kioky ismy ak func bhi dety hen to is  liye
    // har func ki chizen ati hi perameter me hen to hm para meter dekr osko log krky hm inspect me dekh skty hen
});
myydiv?.addEventListener("click", (e) => {
    myydiv?.remove(myybtn);
    //    isy hoga ye ke mydiv pr jb click krengy to wo btn ko remove krdega
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// target or current target ka ak hi kam he ke click krny pr pora element otha kr de ana
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.body.addEventListener("click", (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
    // ismy hoga ye ke hm body me jga click krengy osmy clientx btayga e apka mouse left sy kitna falsy pr he or
    // clienty btayga ke oper sy kitny fasly pr he mose yani hmy lmbai or chorai ka fasla btayga jha hm click krengy inspect me
    // iska use hm is tra kr skty hen ke hm likhen ke wo agr clientx me 100 sy bara he to backgrond ko blue krdena
    // to hm jga screen pr esi jga click krengy jha ka fasla 100 sy zada hoga to wo chang kr dega 
    if (e.clientX > 100) {
        document.body.style.background = "blue";
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
