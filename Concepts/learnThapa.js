/*  
Event handlers

Mouse events :- 'click','dblclick','mouseover','mouseout','mousedown','mouseup'
Keyboard events :- 'keydown','keyup'

*/

const input = document.querySelector("#type");
const key = document.querySelector(".key");
const eventType = document.querySelector(".eventType");
const charCode = document.querySelector(".charCode");
const keyCode = document.querySelector(".keyCode");
const button = document.querySelector(".bt");

// console.log(input);
// console.log(input.value);

function trigger(event){
    // console.log(event);
    // console.log(event.key);

    
    if(event.key==="Backspace"){
         key.innerText = "Key Pressed: ";
    eventType.innerText = "Event Type:";
    charCode.innerText = "Character Code:";
    keyCode.innerText = "Key Code:";
    } else{
          key.innerText = key.innerText+`${event.key}`;
          eventType.innerText = eventType.innerText + `${event.type}`;
          charCode.innerText = charCode.innerText + `${event.key.charCodeAt(0)}`;
          keyCode.innerText = keyCode.innerText + `${event.code}`;
    }
  
    
}
function triggerAgain(event){
    // console.log(event);
    // console.log(event.key);

   
    
}

/*
input.addEventListener('keydown',()=>{
    trigger(event);
});
input.addEventListener('keyup',()=>{
    trigger(event);
}); */

const callFun = (event)=>{
    console.log(event.target.value);
}

input.addEventListener('input',callFun);