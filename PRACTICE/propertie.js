"use strict";
let div = document.querySelector("div");
console.log(div?.textContent);
// ey hm cheq krty hen apny kam ko textcontent hmary div me likhi wy text ko show krwayga
console.log(div?.innerHTML);
// iner html hmara jis pr hm lga kr cheq krengy osku ilawa ander ki sari chizon ko lyk ajata he jesy abhi hmny div pr lgaya wa he to wo div
// ko chor kr pera wagra sbko lekr ayga tags ko bhi dikhayga web waly conole me
console.log(div?.outerHTML);
// ouer html to sbko lekr ajayga pora elemeny class id div  wagera sb ko le ay ga
console.log(div?.innerText);
// ye bhi srif text ko lekr ayga but agr 3 pera hen ak div me to 3 no ko lekr ayga
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// textContent & innerHTML
// in dono me ak or bhi frak hota he ke textcontentent me hm jo bhi "" me likhten hen to wo ak to text content ko ubdate kr deta he
// or jo bhi hm likhengy wo sbko ak text ki sorat me lekr ayga bhly hm osmy koi tage de den jesy
div.textContent = "i am faiza <span>naaz</span>";
// AB AGR ISKO hm cheq krengy web me to wo yehi asitiz dikhayga jesy "i am faiza <span>naaz</span>"
div.innerHTML = "i am faiza < id : ab span>naaz</span>";
// ab ye esitiz lekr nhi ayga blky ye span ko span ki trha chalayga bhi ka jesy "i am faiza naaz "
// esy lekr ayga or hmny jo id di he osko target krky hm color chang krengy to wo bhi krdega yani ak trha sy ye tage ko 
// yha pr use krny sy html me bhi add kr deta he bhly hm osko "" isky ander likhen
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
div.className = "abc";
div.id = "abc";
// isy ye hoga ke ye html me div ko ye class ye id de dega 
// iska yr faiza he ke hmny bhut sary div me agr ak hi kam krna he to hm div ko pkar kr div tage ko osy class de dengy to wo sari divs me add
// ho jayga lekin hmy ak sy zada pkarna he to pkarengy  hm os element sy jo html collection return krta ho wrna wo 
// bs phly waly me krdega 
div.className = "";
// hm esy likh kr agy empty string de dengy  to wo os class ya id ko remove krdega 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  atributes
console.log(div.atributes);
// ye sary atributes dikhaygy console me jsy class id wagera sb jo tages ke ander diya wa hoga or oski information bhi oska name wagera sb
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
div.addEventlistner("click", () => {
    window.close();
    //  isy ye hoga ke jb hm div  pr ya jis pr applay kiya he ospr click krengy to wo os page ko band krdega jesy hm katis ke nishan pr click krky off krty hr
});
div.addEventlistner("click", () => {
    window.open("google.com");
    // isy hm jis pr div pr click kregy to wo hmy google open krky dega
});
div.addEventlistner("click", () => {
    window.print();
    // hmary computer me ak window hoti he jimy hm print krty hen wo hmy ospr le jayga
});
div.addEventlistner("click", () => {
    window.alert("faiza");
    // isy wo aert ko khol kr de dega jesy hi hm div pr click krengy jesy alert hota hena web pr jismy hm user ko sms dekr wo wala hi or agr hm
    // koch sms likhna chahty hen to wo bhi de sty jesy yha diya faiza
});
div.addEventlistner("click", () => {
    window.confirm("you like my web");
    // ye jo hmny alert ki trha sms bhi likhny deta he or confirm krwata he ok ya cancel agr user ok kryga to wo consle me inspact krky
    // hmy ok p true or cancel pr fale bhi return krta he
    // to hm is sy ye bhi kr skty hen ke if elsy ki condition lga skty jesy ke sms den ke apko pasand ai website agr user ok kre yani true ho to
    // osko khna thanks or cancle to by khna esy
});
div.addEventlistner("click", () => {
    window.prompt("what your name");
    // ye wesy hi promt khol kr dega jesy normal promt krta he ke hm osmy koi sawal poch kr jawab likh skty hhen input me
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(div?.getAttribute("tag"));
// isy hmy jis pr lgaya he wo bhi btana hota he"" isky ander ke wo class he id he kiya he to hmny div pr lagya he or div ak tag he toy  hmny likh diya tag
// to ye hmsy ak argument zaroro mangta he isi ka tag id ya class
// ye hmary atributes ki value dikhata he inspect krky jesy class atribute he or oski value oska name he jesy style agr inline yani html
// me hi css de di to wo stly ke tage me jo jo hoga wo dikhayga inspect krky jesy color:greee , background : yelow
console.log(div?.setAttribute("style", "background:blue;font:23px"));
// ye do argument leta he or class id ya kisi atribute ko add krwata he html me or 2 argument me hmy isko name or  value dono de skty hen
// jesy class or class ka name"abc" ya id or id ka name to wo add kr dega osko html me
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
