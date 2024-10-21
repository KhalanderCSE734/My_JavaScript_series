/*  
Event handlers

Mouse events :- 'click','dblclick','mouseover','mouseout','mousedown','mouseup'
Keyboard events :- 'keydown','keyup'
Use 'Kyedonw' and 'keyup' for other eventlistner such as for 'enter' and all

*/

// const input = document.querySelector("#type");
// const key = document.querySelector(".key");
// const eventType = document.querySelector(".eventType");
// const charCode = document.querySelector(".charCode");
// const keyCode = document.querySelector(".keyCode");
// const button = document.querySelector(".bt");

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

// input.addEventListener('input',callFun);






/*                                          Local Storage                   */

/** 'localStorage' is provided by window object
 *  Initially when we don't have anything stored in local we'll have the length of the local to be equal to 0 
 *  It'll get initialised to some value when we store the things over there
 *  We store those data as 'key-value' pair
 *  We have somany methods in that 
 *                                      1.)setItem  2.)getItem  3.)removeItem
 */




// console.log(window.localStorage);
/*




localStorage.setItem(`Mummy`,`Bhagawan`);           //It will add our data to local storage

localStorage.getItem(`Mummy`);                      //This will give the data which was set
let data = localStorage.getItem(`Mummy`);                    

// console.log(data);                                   //If we try to access the non-existing data we'll get 'null' value
localStorage.setItem(`BMSCE`,`Bengalore`);
localStorage.setItem(`A`,`Apple`);

localStorage.removeItem(`A`);                           //In order to remove 




*/

/**
 * We can Only store 'string 'in `localStorage` so here again comes the concept of 'json'
 * We can use two important method in this context which is provided by 'json' 
 * 1.) JSON.stringify           2.)JSON.parse
 *      *JSON.stringify will convert our requried dataStructure(like array or any objec) to string
 *      *We can convert back the converted data of 'string' to our 'dataStructure' using json.parse
 *       
 */

// const studentInfo = {firstName:"Mohammed",lastName:"Khalander",age:19,sem:3,CGPA:9.775,courses:["DS","DBMS","OOPS"],address:{street:"N.R.Colony",houseNo:21,city:"Bengalore",state:"Karnataka"}};

/*
const studentInfo = {
    firstName:"Mohammed",
    lastName:"Khalander",
    age:19,
    sem:3,
    CGPA:9.775,
    courses:["DS","DBMS","OOPS"],
    address:{
        street:"N.R.Colony",
        houseNo:21,
        city:"Bengalore",
        state:"Karnataka"
    }
};
 */



/*




//Now we have an object with us (studentInfo)

localStorage.setItem(`object`,`${studentInfo}`);            // If we do this we don't get our requrired output, so use 'json'

// let studentData = (studentInfo);    //JSON.stringify
let studentData = JSON.stringify(studentInfo);          // Now I can add this to the local storage

// console.log(studentData);
localStorage.setItem(`object`,studentData);

let getData = localStorage.getItem(`object`);
// console.log(getData);                           //If we do this we'll get 'string'(Which is the type of the data) form, so we need to 'parse' it 

getData = JSON.parse(localStorage.getItem(`object`));
console.log(getData);

localStorage.removeItem(`object`);          // This will delete the thing





*/

/*
let curDate = new Date();
console.log(curDate);           //In js months starts from 0
console.log(curDate.getFullYear());
console.log(curDate.getMonth());        // We'll get 9 (even if this is october because zero based)
console.log(curDate.getDate()); 
console.log(curDate.getDay()); // Same for day also zero based
console.log(curDate.getTime());         // We'll get time in millisecond from Jan 1970  // We also have getHour,getMinutes, and so on
console.log(curDate.toLocaleTimeString());      // 6:23:10 PM
console.log(curDate.toLocaleDateString());      // Month/Date/year

*/

/*                                     Timing Based Events         */
//'setTimeOut' and 'setTimeInterval'

function repeateAtEveryInterval(x){
    console.log("I'm cool");
}
// setTimeout(repeateAtEveryInterval,2000);         It'll give output only one time
// setInterval(repeateAtEveryInterval,2000);        It'll give output every two seconds


let id = setInterval(repeateAtEveryInterval,1000);

// setTimeout(clearInterval(id),5000);     // I cannot write it like this

setTimeout(()=>{ clearInterval(id)},5000);




let idType = `USN`;
const studentInfo = {
    [idType]:"1BM23CS195",      //Dynamic  key based on idType
    firstName:"Mohammed",
    lastName:"Khalander",
    age:19,
    sem:3,
    CGPA:9.775,
    courses:["DS","DBMS","OOPS"],
    address:{
        street:"N.R.Colony",
        houseNo:21,
        city:"Bengalore",
        state:"Karnataka"
    },
    info: function(){
        console.log(`my name is ${studentInfo.firstName} ${studentInfo.lastName}, my ${idType} is ${studentInfo[idType]} `);
    }
};


studentInfo.info();