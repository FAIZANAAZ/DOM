
/////////////////////////CATCH/////////////////////////////////////////////////////////////
let pra :any= document.querySelector(".pr")
let onbtn = document.querySelector("#btn1")
let offbtn = document.querySelector("#btn2")
let watch = document.querySelector(".watch");
// ye srif border kor rotrate krny ke liye catch kiya he

///////////////////////////VARIABLE////////////////////////////////////////////////////////
 let sec = 0
 let min = 0
 let hrs = 0
 let currenttime =0
 let interval :any;
 let pasedtime =Date.now()
 

onbtn?.addEventListener("click",()=>{
  pasedtime=Date.now()

 interval =setInterval(
    ()=>{
        currenttime = Date.now() 
        sec =Math.floor((currenttime-pasedtime)/1000) %60
        min =Math.floor((currenttime-pasedtime)/(1000*60))%60 
        hrs=Math.floor((currenttime-pasedtime)/(1000*60*60))%60

        sec = zerset(sec)
        min = zerset(min)
        hrs = zerset(hrs)

        pra.textContent = `${hrs}:${min}:${sec}`

    

        function zerset(unit:any) {
          if (unit > 9) {
              return unit
          }else{
            return "0"+ unit
          }
            
        }

      
      
    },1000

    
  )

  watch?.classList.add("rotating");
//isy hmny jo class add ki he or osky border ko run kiya he .classlist sy class add hoti he css ki wo hmny on button me run ki he
// taky jb button on pr click hoto border run kry warna nhi 

  })


offbtn?.addEventListener("click",()=>{
    sec = 0
    min = 0
    hrs = 0
    currenttime =0
    clearInterval(interval)
    
   

    sec = zerset(sec)
    min = zerset(min)
    hrs = zerset(hrs)

     pra.textContent = `${hrs}:${min}:${sec}`

   function zerset(unit:any) {
     if (unit > 9) {
         return unit
     }else{
       return "0"+ unit
     }
       
   }
   pra.textContent ="00:00:00"
  
     
  watch?.classList.remove("rotating");
//isy hmny jo class add ki thi or border ko run kiya tha osko stop kr diya he
    
    

})





























