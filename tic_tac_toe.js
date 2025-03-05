let boxes=document.querySelectorAll(".box");
let msgcontainer=document.querySelector(".msgcontainer")
let msg=document.querySelector("#msg")
let newbtn=document.querySelector("#newgame")
let resetbtn=document.querySelector("#reset")

 let count=0;
 for(let box of boxes){

        
        box.addEventListener("click",()=>{
     
                count++;
          
        
        if(count%2==0){
                box.textContent="X";
                
        }
        else{
                box.textContent="O";
        }
        box.disabled=true;
        
        checkwinner();
 }
)
}

const winingpattern=[

 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [2, 4, 6]

]
const checkwinner=()=>{

for(let pattern of winingpattern){

        
let posval1=boxes[pattern[0]].innerText
  
let posval2=boxes[pattern[1]].innerText
  
let posval3=boxes[pattern[2]].innerText;

 if(posval1!="" && posval2!="" && posval3!="" ){
       
        if(posval1==posval2 && posval2==posval3){
                console.log("winner")
                showwin(posval1);
                disabling();
        }


 }
}

}
 const showwin=(posval1)=>{
 
 msg.innerText=`Congratulations,player ${posval1} u won`
 msgcontainer.classList.remove("hidden");
 }

 let  disabling=()=>{
for(let box of boxes){
        box.disabled=true;
}

 }

 newbtn.addEventListener("click",()=>{
        for(let box of boxes){
                box.disabled=false;
                box.textContent="";
        }
        msgcontainer.classList.add("hidden")
 })
 
 resetbtn.addEventListener("click",()=>{
        for(let box of boxes){
                box.disabled=false;
                box.textContent="";
        }
        msgcontainer.classList.add("hidden")
 })
 