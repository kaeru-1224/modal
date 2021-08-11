//zindex로 처음에는  body를 바꿔주려했는데 안되어서 ㅋㅋㅋㅋ
//결국 방법을 찾아보니 그냥  div를 크게 만들어서 덮어씌워주고 
//div의 zindex를 조절해주면 되는 거였어 흑흑,,,,, 



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
