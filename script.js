const btn = document.querySelector("button")
const over = document.querySelector(".overlay")
const closeBtn= document.querySelector(".box-close")
console.log(closeBtn)

function changeBack(){
    if( over.style.zIndex<-1){ over.style.zIndex="2";}
    else{ over.style.zIndex="-2"} 
   
   }

btn.addEventListener('click',changeBack)
closeBtn.addEventListener('click',changeBack)
