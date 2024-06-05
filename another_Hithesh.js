// console.log("Hello there");
// console.log("02">1)         O/P = true

// console.log(null>0)
// console.log(null==0)         O/P = false
// console.log(null<0)

// console.log(undefined==0)
// console.log(undefined>0)         O/P = false
// console.log(undefined<0)

// console.log("2" === 2)           O/P = false
// console.log("2" == 2)           O/P = true

// const name = "Khalander ";
// const repoCount = 4;                                 O/P 'Hello my name is Khalander and repo count is 4'
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

/* Primitive data types are stored in stack and non-primitive data types are stored in heap 
    reference of object is stored in stack and if more than one reference is created for a object ,both reference will be pointing to same object which used to be stored in heap
*/

/*

To generate any random number between 'a' and 'b'
let a = 20;
let b = 30;
let random = Math.floor(Math.random()*(b-a+1)) + a;
console.log(random);

Above 1 is just to avoid the case of zero and '+a' is to generate more than 'a'
*/


// const obj1 = {
//     name:"Mohammed_Khalander",
//     sem:"Second",
//     sgpa:9.6
// };


// function getObjectAsParameter(obj1){
//     return ` Your name is ${obj1.name} and You are in ${obj1.sem} sem and you have got ${obj1.sgpa} sgpa`;
// }

// console.log(getObjectAsParameter(obj1));



// function manyValuesReturnInReturn(num1,num2,...nums) {
//     return `${num1}, ${num2},${nums}`;
// };

// console.log(typeof(manyValuesReturnInReturn(2,3,4,5,6,7,0,10)));





// var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);  // 10
    
// }
// console.log(a);  //300
// console.log(b);  //Undefined And error
// console.log(c);  //300


/*
    Global e xecution context
    function execution context

    -->when the code starts to run 
         *In global 'this' will executes first which might be empty
         *Memory will be create first and all variables set to undefined 
          and then (Memory execution context)
          *Function execution context comes into picture(code execution context)



*/


/*
we can access any variable created using "var" before initialising only (Which stores 'undefined' because of hoisting)
But It's not the case for "let" and "const" keyword (We will get an error)
For 'var' memory is allocated in "Global" but not for 'let' and 'const'



Hoisting is simply allocating memory before execution only for all variables
Temporal dead zone is the phase from hoisting to the level where memory is allocated for variables

*/












