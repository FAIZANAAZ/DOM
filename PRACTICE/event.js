"use strict";
//  //  ************************EVENTLISTNER*******************************
// //**********************************target****************************************** */
//  let mybtn = document.querySelectorAll(".btn")
//  mybtn.forEach((i:any)=> {
//      console.log(i.target);
//    });
//    // .target kiya krta he ke ye web waly console me hmy btayga ke hmny konsa button click kiya he yani hm jis button pr click 
//    // krengy wo osko pora otha kr le ayga  kioky yha ak button hi he hmny 4 button bnay hen jisko same id di he or querySelectorAll sy pkra he 
//    // foreach hmny isi liye lgaya taky bar bar code na likhna pry agr hm querySelectorAll ki jga kisi or element sy 
//    // pkarty to hmy har ksi ke liye log (i.target krna hota ) kioky koi or to foreach ko support hi nhi krta 
//      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //**********************************click****************************************** */
// // ye click bhi ak event he ye hm jb event listner me likhty hen to hm phir osky under jo bhi krty hen button ko ya jis pr lagaya he os pr
// // click krny sy wo sary kam ho jaty hen jo hm dety hen osky ander jesy color chang wagera
// let evnet :any= document.querySelector(".evnet")
// evnet?.addEventListener("click",()=>{
//     evnet.textContent="faiza"
// })
// //********************************** chang ****************************************** */
// // chang event krta ye he ke jsy hmny ak drop dawn manue yani jismy list hoti he
// //  likha or osky ander mokhalif country ya kisi ki bhi choice krky list de di or osky sath ak sms
// // de diya jesy i like colocolate falavour to chang event krta ye he ke hm jb hm jis ko select krengy wo message me osko add krdyga 
// // jesy hmny chocolate hta diya oski jga likh diya vanela falavour to wo nichy sms ko bhi khod chang krdyga name sms ko
// // esy hi agr hm input box me lgaygy or addlitner me krengy to hm jo input me likhen to wo likhny to dega lekin jb enter krengy to
// // wo nichy os chiz ko enter krdega or enter krny ke bad bhi hm koch or likhe den sath osky to phir enter krden to bhi wo nichy
// // donochizen likhdega yani chang ka matlb hi yehi he ke hm koch bhi kren wo chang ho jay agli jga bhi addlistner pr
// let evnet2 :any= document.querySelector(".evnet")
// evnet2?.addEventListener("chang",()=>{
//     evnet.textContent="faiza"
// })
// //********************************** input ****************************************** */
// // input bhi chang ki trha hota he lekin input me hm jb koch likhty hen wo osi time chang krta he jbky chang me koch likhny ke bad
// // enter krty hen to tb wo kam krta he
// // ak bad yad rkhna he ke input me jo likhty hen wo textcontant nhi hota oski value hoti he or wo save web waly console me wo osy
// // data me save krta he to hmy osky content ko = krny ke liye data ka use krna hoga naky textcontent
// let evnet3 :any= document.querySelector(".evnet")
// evnet3?.addEventListener("input",(e:any)=>{
//     evnet.textContent=e.data
// })
// //********************************** submit ****************************************** */
// // ye krta ye he ke hmary page ko reload kr deta he yani hmny submit pr jga bhi dta bhejna ho jesy sbmitiom form fill kiya kisi ne or sub
// // submit krwa diya to wo data ko wha le jayga jha hm bhejen or page ko reload krdega yani khali jesy hm apny page ko jb reload
// // krty hen to wo khatam krdeta he sra kam esy submition khod sy hi kr deta he outo
// let evnet4 :any= document.querySelector(".evnet")
// evnet4?.addEventListener("submit",(e:any)=>{
//     evnet.textContent=e.data
// })
// // isky web waly console me ak property deta he ye timestemp jismy wo time btata he ke submition foram ya koi form ke kholny sy lekr
// // form submit hony tk ka
// // agr hm chahty hen ke submiit howa wa data khi bhi na jay jesy  practice ke tor pr khi na bhejen hm to hm ak function ka use krty hen add
// // eventlistner ke ander 
//                         //  event.preventDefault()
// //********************************** mouseover ,mouseout ****************************************** */
// // mouseover or mouseout ye kam krty hen jo hm css ke zariye hover sy krwaty hen yani hm jo code mouseover pr likhengy wo mouse rakhny
// // pe wo kam krky dega jesy color chang lekin osko htaygy to wo dobara wesy nhi hoga
// // osko dobara wesy ya htany pr color chang krny ke liye hmy mouseout ka event use krna hoga 
// let evnet5 :any= document.querySelector(".evnet")
// evnet5?.addEventListener("mouseover",()=>{
//    evnet5.style.background = "pink"
// })
// evnet5?.addEventListener("mouseout",()=>{
//    evnet5.style.background = "pink"
// })
//********************************** keyup ,keydawn ****************************************** */
//keydawn
// ak to ye ke ye hm zada tr body me document.body krky applay krty hen to h jb body me khi bhi click krky koi key press krengy key matlb
// a b c wo buttons jo hmary keyboard me hoty hen or wo krta yehe ke web waly console me ak key ki property hoti he osky ander wo os 
// buttton ka name bhi likh kr deta he jo hmny press key jesy a b s
// iska use hm is trha kr skty hen ke hm likhen ke agr h press hoto ye ho jay m pressh hoto ye ho jay 
// usecase:
// iski har chiz ati he key me to hm key to target krty hen 
// ye bhi agr koi key press krengy to keydawn chlyga agr chodengy press ki hoi key ko to keyup ka code run hoga 
let snak = document.querySelector(".snak");
// hmny pkar liya ak div me jismy ak snak bnawa he oe osko hight wagera hmny css me di he
// or postion chang hogi kioky hmari div ki agr wo move hogi to hmy position absolue dena
let x = 0;
let add = 2;
let y = 0;
document.body.addEventListener("keydown", (e) => {
    if (e.key == "ArrowLeft") {
        // e.key isi liye likha he kioky press ki gai key ati hi key ki property me hen
        x -= add;
        snak.style.left = x + "px";
        snak.style.background = "pink";
        snak.textContent = "😉";
    }
    else if (e.key == "ArrowRight") {
        x += add;
        snak.style.left = x + "px";
        snak.style.background = "yellow";
        snak.textContent = "😉";
    }
    if (e.key == "ArrowUp") {
        y -= add;
        snak.style.background = "black";
        snak.style.top = y + "px";
        snak.textContent = "😉";
    }
    if (e.key == "ArrowDown") {
        y += add;
        snak.style.background = "red";
        snak.style.top = y + "px";
        snak.textContent = "😉";
    }
});
document.body?.addEventListener("keyup", (e) => {
    snak.style.background = "blue";
    snak.textContent = "🐍";
});
//  description
// ismy hmny kiya ye he ke ak x or y ka variable bnaya he jisko 0 value di taky bad me osy modify kr sky phir hmny kha ke x or jb hm add
// sy + krwaya kioky add 2 tha to jb jb hm left right kregy arrowkey press krengy to wo 2 person osmy add me add hoga or + isi liye lagaya taky 
// wo roky na add krta rhy 2 2 person phir nichy color or emogi to simple hmny chang ki or hmny kha ke jb bhi prees ho key to wo left
// traf move ho  x + "px" ka matlb kioky add ke braber hota jayga x or osmy hm left side px bhi nichy add krty jaygy
// or ak x me + diya or ak x me - ak y me  + or ak me _ ka matlb ye he ke jb hm left likh kr - ka use krty hen to wo right bn jata h or top
// pr kiya he to wo dawn ho jata he

//********************************** keyup ,keydawn ****************************************** */
   //////////////////////////////////////////////////////////////
   form.addeventlitner("click",(e)=>{
    e.preventDefault()
    // isy hmara form khi or jakr submit nhi hoga jesy likh kr reload kro to sb gaib ho jata he wo ni hoga
   })
   //////////////////////////////////////////////////////////////

   window.print()
//    kisi btn pr ye lgaygy to wo print ho jayga option matlb open ho jayga

   //////////////////////////////////////////////////////////////

   window.location.href="./resume/resum.html"

//    isy ye hoga ke hm jispr isko applay kengy btn click pr wo apni location chang krky os page pr le jayga

   //////////////////////////////////////////////////////////////
 
 window.addEventListener("load",()=>{
// load sy ye hota he jb bhi page loade hota he to  wo chizen chlti hen jo ismy hm dengy 
 }) 


 