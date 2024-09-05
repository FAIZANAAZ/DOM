// body ko document ke bager target nhi kiya ja skta document.body

let myydiv :any = document.querySelector(".abc")
let myybtn :any = document.querySelector(".btn")


myydiv?.addEventListener("click",(e:any)=>{
    console.log(e);
    // click event by default bhi hmy koch chizen detga he jo hm inspect krky dekh skty hen to kioky ismy ak func bhi dety hen to is  liye
    // har func ki chizen ati hi perameter me hen to hm para meter dekr osko log krky hm inspect me dekh skty hen
    
})

myydiv?.addEventListener("click",(e:any)=>{
   myydiv?.remove(myybtn)
//    isy hoga ye ke mydiv pr jb click krengy to wo btn ko remove krdega

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// target or current target ka ak hi kam he ke click krny pr pora element otha kr de ana

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.body.addEventListener("click",(e)=>{
    console.log(e.clientX);
    console.log(e.clientY);

    // ismy hoga ye ke hm body me jga click krengy osmy clientx btayga e apka mouse left sy kitna falsy pr he or
    // clienty btayga ke oper sy kitny fasly pr he mose yani hmy lmbai or chorai ka fasla btayga jha hm click krengy inspect me

    // iska use hm is tra kr skty hen ke hm likhen ke wo agr clientx me 100 sy bara he to backgrond ko blue krdena
    // to hm jga screen pr esi jga click krengy jha ka fasla 100 sy zada hoga to wo chang kr dega 

    if (e.clientX > 100) {

        document.body.style.background="blue"
        
    }

    
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let formm = document.querySelector("form")

formm?.addEventListener("submit",(e)=>{
    e.preventDefault()
    // isy ye hoga ke practice time to hm data ko khi nhi sumbmit krwary hoty to jb submit krty hen to google preshan hota e
    // ke submit hora he but ho nhi para to hm osy rok dety hen
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// bubling effect

let outerdiv :any = document.querySelector(".out")
let interdiv :any = document.querySelector(".in")

outerdiv?.addEventListener("click",(e:any)=>{
    outerdiv.style.backgrond="blue"

    e.stopPropagation()

})

interdiv?.addEventListener("click",()=>{
    interdiv.style.backgrond="blue"
})

// ismy hmny kha ke jb iner pr click hoto iner ka out pr click hoto outer div ka colo blue kr dena
// jb hm out pr click krengy tb to blue outer ka color ho jayga lekin 

// ismy ak msla ye hota he ke jb hm 2 bar click event esy ande baher use krty hen to jb under yani inner div
// pr click krty hen to wo apna color chang krta he but phal jata he or outer div jisky ander wo he oska color bhi chang kr deta he to osko 
// hm rokty hen stoppropagation sy

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  console.log(e.type);
// esy hm kisi event ki type bhi inspect me cheq kr sktyh en jesy click
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
// typescript or html wala csss inline khlata he or inline ki zada value hoti he agr hm koi chiz html me style ka tage 
// degey jesy blue color de diya or osi ki class ko external css me le jakr krengy alag file me or osko color yello dengy
// to wo blue lega inline ki value zada he

// isi trha id me dengy or class me to wo id wala lega class wala nhi lega 

// agr hm phly id me koi color dengy or bad me class me color chang kengy to wo vcvolor chang hi nhi kryga
// or isi trha hm agr id class me dengy or id sy chang krengy to wo ho jayga chang

// or agr hm typescript me koi esa code likhen ke html me jakr chq kro ke ye he ya nhi to wo direct inline css me jakr cheq kregy
//external css me wo jayga hi nhi yano  inline inline hi slect kta he jesy
                            //  hm likhty hen if ki condition ke agr
                            // mydv.style.backgroundColor == blue ke to textcontent ko 7979 krdo
                            // to wo css me nhi jayga inline me jayga agr osko nhi mila to wo kreyga hi nhi lekin jayga nhi wo css me

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console,log(mydiv.style)
// isy hm inspect me cheq kr skty hen style me kiya kiya he

// mydiv.classlist.add()
// isy wo hmary external css sy kisi class ko div me add krwady ga jo html me bhi ni nhi hogi
// mydiv.classlist.remove()
// or ye remove


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// toggle
myydiv?.addEventListener("click",()=>{
    myydiv?.classList.toggle("bcolor")
})

// toggle  classlist ke sath likhty hen to wo krta ye he ke wo click krny pr class ko add krwa dta he or dobara click krny pr khod
// hi romove bhi krwa deta he

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

myydiv?.addEventListener("click",()=>{
    myydiv?.classList.replace("bcolor","abc")

    // ismy replace kr deta he wo ak class sy dosri class ko yor do argument leta he ye ak phly oldclass ka name or ak new class ka name
    
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(myydiv?.classList.contains("bcolor"));

// ye hmny inspect me true dega to matlb class he or agr false dega to matlb class mojood nhi he or ye srif class ke
// liye hota id ke liye nhi hm isy cheq krty ke ye class div me he ke nhi
