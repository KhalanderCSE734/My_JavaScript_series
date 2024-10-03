/*

let x;
console.log("Type of x  is "+typeof(x));            undefined
// Un-defined and not-defined both are different 
// If I don't declare 'let x' and print x then I'll get not defined and above case is  un-defined
let y = null;
let z = 0;
console.log("Type of y undefined is "+typeof(y));
console.log("Type of z undefined is "+typeof(z));

*/

/*
const information = {
    name:"Mohammed Khalander",
    Sem:3,
    cgpa:9.775,
    college:"BMSCE",
    dream:"Adobe",
    desitination:"Google",
    cgpa:9.95
};
// console.log(information.name);
// console.log(information["name"]);            Even JavaScript doesn't allows duplicates in objects
// console.log(information);

*/


/*

console.log(2+1);       //3
console.log("2"+1);     //21
console.log('2'+1);     //21 in js but in other languages it is 51(because of ASCII codes)
console.log(1+'2');     //12 in js but int java it is 51(ASCII)
console.log(1+"2");

console.log(1=="1");    //true in js but, we can't even make that check in java

*/

// 2>0?console.log("positive"):console.log("negative");

/*  

let name = "Mohammed Khalander"
for(let i in name){
    console.log(i);  //                  This will print 1,2,3,4,......,17 numbers      but, it will print key if we take object 
}
for(let i of name){
    console.log(i);   //                    This will print characters 
}

 */

/*

let name = "Mohammed Khalander"

let name2 = name.slice(0,18);
// console.log(name2);

let name3 = name.concat(name2);
// console.log(name3);

let name4 = name.replace("d Kha","D KHA");
// console.log(name4);                                Till now, whatever methods we are using in String it is returning something, but in arrays everything is happening in-place, But obviously when we use 'filter', 'map', and 'reduce' they return the new one
*/


// let num = Math.random();
// console.log(num);

// 20 - 30
// let num2 = (Math.floor(Math.random() * (30-20)) + 20) ;
// console.log(num2); 






















