// hm css ko ts me bhi de skty hen sb string me dena hoga 
// 1)
// ye div hi return krta he agr hmm web waly inpect sy open krengy wha ke console ko to wha divid hi likha ayga jha pr wo hmy sb
// chiz show kry ga jo hmny apply ki or jo kr skty hen apply

// let mydiv :any= document.getElementById("practic");
// mydiv.style.backgroundColor = "blue";
// mydiv.style.height = "100px";
// mydiv.style.width = "100px";
// mydiv.style.color = "white";
// mydiv.style.border = "2px solid ";
// mydiv.style.display = "flex";
// mydiv.style.justifyContent = "center";
// mydiv.style.alignItems = "center";

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


// //ismy kioky ye array ki trha class element collection hta he to hm ismy  do chizon pr applay krny ke liye hmy indexx number dena pryga

// ye hmtl collection returnt krta he web waly console me

let mydiv2 :any= document.getElementsByClassName("practice2");

// mydiv2[0].style.backgroundColor = "blue";
// mydiv2[0].style.height = "100px";
// mydiv2[0].style.width = "100px";
// mydiv2[0].style.color = "white";
// mydiv2[0].style.border = "2px solid ";
// mydiv2[0].style.display = "flex";
// mydiv2[0].style.justifyContent = "center";
// mydiv2[0].style.alignItems = "center";

// //ag 0 ki jga 1 krengy to wo dosri div pr apply hoga lekin name same hona chiye class ka html me

// //ismy hm koi array ka method to applay ni kr skty lekin for loop kr skty he jesy
// // phir wo ak ak krky dono pr applay hoga 

// for (let i = 0; i < mydiv2.length; i++) {

// mydiv2[i].style.backgroundColor = "blue";
// mydiv2[i].style.height = "100px";
// mydiv2[i].style.width = "100px";
// mydiv2[i].style.color = "white";
// mydiv2[i].style.border = "2px solid ";
// mydiv2[i].style.display = "flex";
// mydiv2[i].style.justifyContent = "center";
// mydiv2[i].style.alignItems = "center";
// }

// isy hm function pr bhi applay kr skty hen jesy esy hm argument de skty he  function ko or hm ismy agr num 0 dengy to wo 0 pr applay hoga
// 1 dengy to 1 pr or isi trha agr hm color likh den to phir hmy color nhi dena pryga blky color ki jga os property ka name dengy jo hmny 
//  parameter me likhi he jo color argument me dengy
// wo applay hoga isi trha hm koi bhi property de skty css ki

// function myfun(num:number , backgroundColor:string) {
//     mydiv2[num].style.backgroundColor = backgroundColor;
//     mydiv2[num].style.height = "100px";
//     mydiv2[num].style.width = "100px";
//     mydiv2[num].style.color = "white";
//     mydiv2[num].style.border = "2px solid ";
//     mydiv2[num].style.display = "flex";
//     mydiv2[num].style.justifyContent = "center";
//     mydiv2[num].style.alignItems = "center";
// }

// myfun(1 ,"black")
    
   
    // but jb hm ak sy zada property dety hen to ak ka name hm [num]krky likhty hen but dosry ka hm 
    //mydiv2[num].style.backgroundColor = backgroundColor; esy krky braber kr dety hen name ko os property ko
    // jisko hmy barbar chang krna ho
 
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


    // getelementbytag name bhi sbkoch wesy hoga jesy classname me kiya he bus tag hoga class ke name ki jga jesy div peragreaph
   // ye hmtl collection returnt krta he web waly console me


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  let mydiv3 = document.querySelector (".practice3") 
 // ye class retrun krta he 
//  ismy bhi sb applay ho skta css ki chizen
//  ye same name waly class me sy sbsy phli class ko otha kr layga
//  or ye foreach ke method ko bhi support krta he 


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  let mydiv4 :any = document.querySelectorAll (".practice3") 
 // ye nodelist returnt krta he web waly console me**************************************************
//  or ye foreach ke method ko bhi support krta he or bs yehi fark he html collection me or nodlist me
// bad me hm jb koch modify krty hen to wo nodlist me modify nhi hota jbky ts ki file me ya html me collection me ho jata he

mydiv4.forEach((num:any)=>  {
    num.style.backgroundColor = "pink";
    num.style.height = "100px";
    num.style.width = "100px";
    num.style.color = "white";
    num.style.border = "2px solid ";
    num.style.display = "flex";
    num.style.justifyContent = "center";
    num.style.alignItems = "center";
});

// ab ye ak ak krky dono div ko chalayga kioky each ka method sb chizon pr ak ak krky applay hota he

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//*********first element child or last element child sy hm target krskty hen child matlb kisi chiz ke ander ki chizen jesy 

 //kisi div ke ander phly number pr pera he to wo first cild hoga

  //isi trha parent element wo he jisky ander wo khod he jesy body ya agr koi pera he div ke ander to wo div hogi oski parentelement

  // isi trha nextElementsibling sy wo phly ke bad wala lekr ayga

  // isi trha  sy wo phly priviousEentsibling sy wo apny sy phly  wala lekr ayga or agr wo khod phla he to wo apny sy bahir jakr oper waly
  // pory tag ko lekr a jayga osmy koi bhi chiz ho sb

  // agr srif childern likhengy to wo sary childern ko lekr a jayga lekin agr querysalecter me agr hm kisi collection waly
  // elemnt ki bat krengy jesy queryselectorall ya classname to wo ak jesi class ke sary childern ko layga ya ar firstelement khengy to
  // sari div ke first ko target kry ga

  // childern khod ak array hen bhly wo id ke sath hon but wo ander ke sary element ko lekr ayga ak array me
 
// body ka last elementchild sript hota he jismy hm ts ki file link krwaty hen

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

              //***************DOM TRAVERSAL TACHNIQUE ***************************************/

  
  let traversal :any= document.querySelector(".traversal")

  // kisi jga sy chlkr kisi jga phonch jana khlata he travel yani DOM TRAVERSAL TACHNIQUE khlati he 

  // jesy : 
           traversal.parentElement.lastElementChild.previousSibling = "faiza"

              // ismy hmny kiya kha ke traversal sy stary kro or parentElement pr jao yani body me agy hm ya wha jisky ander ye he ye
              // body me to body me a gay phir hmny kha last elementchildern yani sript pr a gy body ka last sript hota he phir 
              // hmny kha privious pr chly jao yani script sy jo phly he yani ak trha sy hmny kha ke body ke 2ndlast element ko baraber krdo
              // faiza ke yahi khlati he traversal tacnique

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

              //***************kisi tage ko banana html ke bager ts sy ***************************************/

    let mypera = document.createElement("p") //make
    // ye hmny ak pera bna liya lekin ye show nhi hoga esy jesy html me p show nhi hota we pr blky osmy jo likha hota he
    // to phir wo show hota he jesy
    mypera.textContent="faiza" //manipulate

    // lekin ye ab bhi nazr nhi ayga isko hmny apppaend krwana hoga or oski jga bhi btani hogi jesy 
    // agr body me krwana hoga to document.body wrna jisky ander krwana ho oska name or. append jesy 
    mydiv2.prepend(mypera)
    // or esy body ko
    document.body.append(mypera) //push
    // append sy wo body ka sbsy last element bnta he
    document.body.prepend(mypera) //push
    // append sy wo body ka sbsy first element bnta he

    mydiv4.insertBefore(mypera , mydiv4)//push
    // isko do chizen deni hoti hen ak wo jo add krni he jesy mypera or ak wo jisy phly add krni he jesy mydiv4 sy phly krni he



    // hm ismy travel bhi kr skty hen or asan bna skty hen jesy

    mydiv4.insertBefore(mypera , mydiv4.parentElement.childern[3])

    // isy kiya howa wo parent me gya yani body me phir childern sy sari chixen targit krli body ki ab hm childern ke index number pr
    // jo bhi rakhengy wo osy os number pr add rdega


    mydiv2.removeChild(mypera)
    // isy delet ho jayga koch bhi

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                 