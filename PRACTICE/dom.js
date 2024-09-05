"use strict";
// DOM 
//  matlb ye he ke document object model
//  yani html ki chizon ko typescript sy pkar kr osko chang krna
// ismy 3 chizen man hen
// pkarna
// cahnging krna
// push kna
// pkarna
let dom = document.getElementById("dom");
// ye hm id ko get krny ke liye hoti he kioky id ak hoti he to hm kisi azDOSRI ID KE liye dobara ye likhna pryga
let dom1 = document.getElementsByClassName("dom");
// kioky class ak sy zada ho skti hen or same bhi hoti hen TO HM jb classname sy pakarty hen html ke elements ko to wo ak
// array ki trha hota he yani wo ak jesi sary class ko ak array ki sorat me ak sath rakh deta he hm isy chang bhi kr skty hen content 
// html ka jesy
dom1.textContent = "i am naaz";
// dom ak pera ki class he to pera me jo likha he wo osko chang krky i am naaz krdega or kioky classname ak array he
// to hm index number ke zariye bhi  kr skty hen jesy 
// dom1[0].textContent = "i am naaz"
// isy ye hoga ke wo sari jo same class hen osmy sbsy phly jis class ko dom diya he bs osko hi chang kryga baqi ko nhi kryga
// ismy hm lop bhi vhla skty hen osky bad wo ak ak krky sbko chang krdega
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// manuplte krna
let cahang = document.getElementsByClassName('pre');
// for loop ke andar koi issue nahi hona chahiye
for (let i = 0; i < cahang.length; i++) {
    if (cahang[i].textContent == "apple") {
        cahang[i].textContent = "naaz";
        cahang[i].style.background = "blue";
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ye bhi ak collection arry ki trha pkarta he kioky tag aksy zada bhi ho skty hen
let dom3 = document.getElementsByTagName("pre");
for (let i = 0; i < dom3.length; i++) {
    if (dom3[i].textContent == "banana") {
        dom3[i].textContent = "naaz";
        dom3[i].style.background = "blue";
    }
}
dom3[1].textContent = "queen";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ye wali isy hm class or id dono ko pkarta he or ismy . or # lgana hota he or ye ak jesi agr class he to wo bs ak hi chiz sbsy phly waly
// ko chang kryga lekin hm iski madad sy chahty hen ke ak syy zada class lay ya sari ak sath to hm use krngy document.querySelectorAll(
let dom4 = document.querySelector(".pre");
dom4.textContent = "queen";
let dom5 = document.querySelectorAll(".pre");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// webpage ke console me jakr prototype pe jakr hmy wo sb method milty hen typescript ke jo hm is chiz pr apply kr skty hen jisko target kiya he
// ak nodelist ki sorat melekin ye srif queryselector me miltaa hhe
