// document.write("Iam writing my first js on html page");
// console.log("Will it come on screen");
// alert("No");
// let variable = {name:"MohammedKhalander",SGPA:9.6}; // Object
// let arr = [3,2,6,3,6,8,8,0];

// We can even use for of loop , but it is not used for objects 
// let name = "Mohammed Khalander";
// for(let i of name){
//     console.log(i);     // It will take the values (characters) inside the string 
// }

// to loop over objects we use for in loop
// let obj = {
//     name:"Khalander",
//     Sem:2,
//     cgpa:9.8,
//     dream:"Adobe",
//     sgpa:9.95,
// }
// for(key in obj){
//     console.log(key," ", obj[key]);
// }


//splice is very usefull method in order to  make changes in array using indices or to add elements in beginning or wherever you want
// let arr = [1,2,5,6,7,20,8,10];
// arr.splice(2,0,3,4); // add         //  o/p:- 1, 2,  3, 4,  5, 6, 7, 20, 8, 10
// arr.splice(7,1); //delete           //  o/p:- 1, 2,  3, 4,  5, 6, 7, 20, 8
// arr.splice(8,0,9); // add           //  o/p:- 1, 2,  3, 4,  5, 6, 7, 20, 8, 10, 9
// console.log(arr);

//If we pass only single argument in splice, then it will delete all the elements from that idex

// let company = ["Bloomberg", "Microsoft", "Google", "Uber", "IBM", "Netflix"];
// console.log(company.shift());           //[ 'Microsoft', 'Google', 'Uber', 'IBM', 'Netflix' ]
// console.log(company);            

// company.splice(2,1,"Ola");
// console.log(company);               //[ 'Bloomberg', 'Microsoft', 'Ola', 'Uber', 'IBM', 'Netflix' ]

// company.push("amazon");
// console.log(company);                ["Bloomberg", "Microsoft", "Google", "Uber", "IBM", "Netflix", "amazon"]
 

// let cities = ["shivamogga","bengalore","bhadravathi","bihar","rajasthan","gujarath"];
// cities.forEach((city)=>{
//     console.log(city.toUpperCase());
// });

// const upperMap = cities.map((city)=>{
//     return (city[0].toUpperCase() + city.slice(1));
// });;
// console.log(upperMap);


//forEach  is only used for arrays not for string

// const arr = [1,2,3,4,5];
// let newArr1 = arr.map((val)=>{
//     return val%2===0;        //Imp Look out this, this thing ain't work so we should use filter to do so
// });

// console.log(newArr2);
// map will in this case returns true or false, a step forward filter will store the true values 


// let newArr2 = arr.filter((val)=>{
//     return val%2===0;       
// });

// console.log(newArr2);

// Reduce method perform some operations on array and returns single value at the end

// let arr = [1,2,3,4,5,6,7,8,9,10];

/* in each iteration 'res' will have returned value and 'cur' will have the 'i'th value of array
    but in first iteration 'res' takes first value and 'cur' takes second value 
    And then first line things happen
*/
// const result = arr.reduce((res,cur)=>{
//     return res+cur;
// });

// console.log(result);



/*
    let numbers = [1, 2, 3, 4, 5];

// Step 1: Create a function that adds two numbers
function add(accumulator, currentValue) {
    return accumulator + currentValue;
}

// Step 2: Use reduce to sum the numbers in the array
let sum = numbers.reduce(add, 0);  // Start with 0 as the initial value

console.log(sum);  // Output: 15



let product = numbers.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);  // Initial value is 1 for multiplication
console.log(product);  // Output: 120


let nestedArray = [[1, 2], [3, 4], [5]];
let flattened = nestedArray.reduce(function(accumulator, currentArray) {
    return accumulator.concat(currentArray);
}, []);  // Initial value is an empty array
console.log(flattened);  // Output: [1, 2, 3, 4, 5]


 */





// for(i in arr) {
//     console.log(i);  // 'i' refers to index
// }
// arr.forEach(function(myName) {
//     console.log(myName);      // 'myName' will take the values inside the arr
// })       //make sure that you right the another bracket at the end
// let taariq = new Date();
// console.log(taariq);
// document.write(taariq);
// let pa = document.getElementsByTagName('p')[0]; // Should specify "Which paragraph we are selecting by specifying the index"
// pa.style.background="Orange";
// pa.classList.add("black");
// let anotherPa = document.getElementsByTagName('black')[0];
// anotherPa.style.classList.add("white");
// pa.classList.add("White");
// function print(a,b) {
//     console.log("I can print anything here: Can you!??");
//     console.log(a+b);
// }
// print(2,4);


// let arrow = (c,d) => {
//         console.log("I'll also perform some of the fucntion like adding two numbers: ");
//         let f= c+d;
// };
// arrow(2,6);
// console.log(f); // Error
// console.log(arrow()); // Calls the function and prints inside whatever it is there
// console.log(arrow);  // Prints the definition of the function



// function ovel(a) {
//     let count=0;
//     a = a.toLowerCase();
//     for(let i=0;i<a.length;i++) {
//         // console.log(a.charAt(i));
//         if(a.charAt(i) =='a'||a.charAt(i) =='e'|| a.charAt(i) =='i'|| a.charAt(i) =='o'|| a.charAt(i) =='u') {
//             count++;
//         }
//     }
//     console.log(count);
// }

// ovel("Mohammed_Khalander");


// const me = (name) => {
//     let count=0;
//         name = name.toLowerCase();
//         for(let i=0;i<name.length;i++) {
//             // console.log(a.charAt(i));
//             if(name.charAt(i) =='a'||name.charAt(i) =='e'|| name.charAt(i) =='i'|| name.charAt(i) =='o'|| name.charAt(i) =='u') {
//                 count++;
//             }
//         }
//         console.log(count);
// };


// me("Mohammed_Khalander");



// let arr = [3,2,6,3,6,8,8,0];


// arr.forEach(function print(val,ind,arr){
//     console.log(val,ind,arr);
// });
 // first one 'val'  gives element of the array , second one 'ind' gives indices of the array and the last one gives complete array

// Another way is 
 
// arr.forEach((val)=> {
//     console.log(val);
// });

/* The above thing is known as Higher order function or callback function (passing function itself as an argument) */


// DOM PART

// console.log(window);
// Window object is created by browser itself
//DOM is "When we create html and js files, html elements converts into object in js files and called Document object model which is present in window object"
// We can log it by "window.document"
// In order to print objects like in document we use 'console.dir' instead log
//When DOM tree is created we get 3 children of it 'text node', 'comments' and 'elements', We concern only about 'elements' node

// Difference between 'innerText' and 'textContent' is , 'textContent shows the content of hidden elements also

// let naam = document.querySelector(".name");
// naam.innerText = naam.innerText + " \n Is my name";


// let a = document.querySelector(".first");
// a.innerHTML = "Mohammed Khalander";
// let b = document.querySelector(".parent");
// console.log(b.children);
// console.log(b.innerText);

// console.log(b.innerHTML);
// console.log(b.tagName);
// let first = document.querySelector(".first");
// first.innerText = first.innerText + " MyName";
// console.log(first);
// let div = document.querySelector(".parent");
// for(val of div.children) {
//     console.log(val);
// }
// for(val of div.children) {
//     console.log(val.innerText="I'm new here");
// }


// let div = document.querySelector(".parent");

// let body = document.querySelector("body");
// console.log(body);
// console.log("Befor the first child is : ")
// console.log(body.children[0]);
// body.children[0] = div;
// console.log(body.children[0]); // This will not work as expected
// body.insertBefore(div,body.firstChild);
// console.log("Now the first child is : ")
// console.log(body.children[0]);
// change the property by adding new class in js
// let first = documkent.querySelector(".first");
// first.classList.remove("first");
// first.classList.add("innerParent");
// let a = document.querySelector(".parent");
// console.log(a);
// a.getAttribute("class");
// let div = a.getAttribute("class");
// console.log(div);
// a.setAttribute("class", "Myclass");                      // Never Use Set Attribut Only use classList
// let newOne = a.getAttribute("class");
// console.log(newOne);

// let a = document.querySelector(".parent");
// console.log(a.style);  // Only gives inline style
// a.style.backgroundColor = "blue";
// a.style.fontSize = "60px";
  


/*

adding elements wherever in html using javascript
first create an element and then add wherever you want

para.append(button);   It will add at the end of the node, but inside it only not out of the node or something

para.after(button); It will add at the end of the node, but outside, this thing we can use 

*/


/*


let para = document.querySelector(".para");
const button = document.createElement("button");
button.classList.add("newButton");
button.textContent = "Change Mode!";
button.style.padding = "15px";
button.style.color = "cyan";
button.style.backgroundColor = "lightcoral";
button.style.cursor = "pointer";
let body = document.querySelector("body");
body.prepend(button);

*/












/*  Creating new elements in js*/

// let btn = document.createElement("button");
// btn.innerText = "I added";
// btn.classList.add("bttn");
// btn.style.backgroundColor = "orange";
// btn.style.fontSize = "20px"; 
// btn.style.padding = "20px";
// console.log(btn);
// let parent = document.querySelector(".parent");
// parent.after(btn);


// I can do the work which was done in line 117  using above logic (from line 141)

// to remove elements 
// let lastdiv = document.querySelector(".anotherDiv");
// lastdiv.remove();

// HomeWork 
// let btn = document.createElement("button");
// btn.innerText = "Click me";
// btn.style.backgroundColor = "pink";
// btn.style.color = "white";
// btn.style.fontSize = "30px";
// document.querySelector("body").prepend(btn);

// let but = document.querySelector("button");
// but.onclick = () => {
//     console.log("You clicked me");
// };
// If events are handled on both js and inline (js has higher priority)


// above event can be also done by following
// but.addEventListener("click", () => {
//     console.log("You clicked me , You did me"); 
// });
 // If we use this event handlers all event listeners will get called wherever we wrote the listeners
 // And always use this only


//  let btn = document.querySelector("button");
//  let mode = document.querySelector("body");
//  btn.onclick = () => {
//     document.querySelector("body").style.backgroundColor = "black";
//  }

/// now toggling the mode of my web
// let curMode = "light";
// btn.addEventListener("click", () => {
//     if(curMode==="light") {
//         mode.style.backgroundColor = "white";
//         curMode = "dark";
//     } else {
//         mode.style.backgroundColor = "black";
//         curMode = "light";
//     }
    
// });





// let arr = [3,2,6,3,6,8,8,0];
// for(i in arr) {
//     console.log(i);
// }
// function printArr(ar) {
//     console.log(ar);
// }
// arr.forEach(printArr);



// CAllBACK

// HELL 

// PROMISE

// ASYNC AND AWAIT


// settimeout function
// console.log("Hello there");
// function printMyName(){
//     console.log(`my name is Mohammed khalander`);
// }

// setTimeout(printMyName,2000);   //This is in miliseconds




// function sum(a,b){
//     console.log(a+b);
// }


// function calculateSum(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculateSum(1,2,sum);



// function calculateSum(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculateSum(1,2,(a,b)=>{
//     console.log(a+b);
// })

// console.log("Mera naam namme hai");
// function fun1(a,callback){
//     setTimeout(()=> {
//         console.log(`data ${a}`);
//            callback();
//     },2000);
    
// }

// function fun2(){
//     fun1(2);
// }

// fun1(1,fun2);

// YYYYYYYYEeeeEEEEEEEEEEEEEEEEEE
/// I got the working of callback function YUUUUUUUUUUUPPPPPPPPPPPPPPPPPPPPPPPPP
// NOthing more than this 

// console.log("First me");
// function getData(dataId,getNextData){


//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){            // Superb cool I got this 'why that is happening'(That if part)
//             getNextData();
//         }
//     },2000);



// }
// getData(1, () => {
//     console.log("getting data 2");
//     getData(2);
// });



// Promises

// let promise = new Promise((resolve,reject)=>{            // Resolve and reject are two callbacks, which is automatically created by js
// console.log("anything");
// });

// console.log("Hello");

// function getData(data,callback){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`data ${data}`);
//             resolve(`Things got success`);
//         },7000);
//     });
// }


// let result = getData(2);


// console.log(`Hello there`);
// function result(usn){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             console.log(`Your name is ${usn} I guess`);
//             reject("That is your name");             // Output check in console
//         },7000);

//     });
// }


// let a = result("1BM23CS195");


/*
After getting the promise ,It'll either get accepted or rejected 
We use '.then'(If promise fullfilled) and '.catch'(If promise get rejected) to resolve the promise whatever we have got


*/



// const usePromise = (name)=>{
//         return new Promise((resolve,reject)=>{
//                 console.log(`Your name is ${name} right??`);
//                 resolve(`You are resolved`);
//         });
// };

// let result = usePromise("Moahmmed Khalander");


// result.then(()=>{
//     console.log(`Congratulations YOur name is correct`)
// });

// result.catch(()=>{
//     console.log(`OOPs it got rejected`);
// });




// const usePromise = (name)=>{
//         return new Promise((resolve,reject)=>{
//                 console.log(`Your name is ${name} right??`);
//                 reject(`I don't want to resolve it `)
//         });
// };

// let result = usePromise("Moahmmed Khalander");


// result.then((resolve)=>{
//     console.log(`Congratulations YOur name is correct`)
//     console.log(resolve)
// });

// result.catch((reject)=>{
//     console.log(`OOPs it got rejected`);
//     console.log(reject)
// });




// Promises Example

/* function fun1(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Here you go , your data ${data}`);
            resolve(`Your data is fetched`);
        },5000);
        
    });
}
function fun2(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             console.log(`Here you go , your data ${data}`);
        resolve(`Your Second data is also fetched`);
        },5000);
       
    });
}

let promise1 = fun1(1);
let promise2 = fun2(2);
console.log(`Fetching data 1...`);

promise1.then((resolved)=>{
    console.log(`Your promise 1 got resolved`)
    console.log(`and the result is ${resolved}`);

})

console.log(`Fetching data 1...`);
promise2.then((resolved)=>{
    console.log(`Your promise 2 got resolved`)
    console.log(`and the result is ${resolved}`);
})
*/


// Using promises effictevely
// PROMISE CHAIN


/* function fun1(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Here you go , your data ${data}`);
            resolve(`Your data is fetched`);
        },5000);
        
    });
}
function fun2(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             console.log(`Here you go , your data ${data}`);
        resolve(`Your Second data is also fetched`);
        },5000);
       
    });
}

let promise1 = fun1(1);

console.log(`Fetching data 1...`);

promise1.then((resolved)=>{
    console.log(`Your promise 1 got resolved`)
    console.log(` ${resolved}`);

    let promise2 = fun2(2);
    console.log(`Fetching data 2...`);
    promise2.then((resolved)=>{
    console.log(`Your promise 2 got resolved`)
    console.log(` ${resolved}`);
})
})


/*
and the actual promise chain is something like this 

fun1(1).then((resolved)=>{
    console.log(resolved);
    return fun2(2);
}).then((resolved)=>{
    console.log(resolved);
})

*/




// Promise chain in actual 


/*
function fun1(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Here you go , your data ${data}`);
            resolve(`Your data is fetched`);
        },5000);
        
    });
}
console.log(`Fetching data 1`);

fun1(1).then((resolved)=>{
    console.log(resolved);
    console.log(`Fetching data 2`);
    return fun1(2);
}).then((resolved)=>{
    console.log(resolved);
    console.log(`Fetching data 3`);
    return fun1(3);
}).then((resolved)=>{
    console.log(resolved);
})

*/



