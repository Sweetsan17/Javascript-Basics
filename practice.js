let a=10;
let b=20;
console.log(a+b);
console.log(a*b);
// post increment a++ and a--
b=a++;
console.log(b);
console.log(a);
// pre increment ++a and --a
a=11;
b=13;
b=++a;
console.log(b);
// data types
console.log(typeof(10));// number
console.log(typeof(true));//boolean
console.log(typeof("Apple"));//string
console.log(typeof(null));// object
console.log(typeof(undefined))// undefine
console.log(typeof([Array])) // object
// functions
function hi(){
    console.log("welcome to js world");
}
hi()
function iphone(){
    console.log("This is an iphone")
}
function redmi(){
    console.log("This is a Redmi")
}
function oppo(){
    console.log("This is an oppo")
}
iphone()
redmi()
oppo()

a=10;
b=12;
function add(){
    console.log(a+b)
}
add()

var factor="Kamal";
var fplayer="Dhoni";
var fmovie="Anbe sivam";
function favorite(){
    console.log("favourite actor is :" +" "+ factor);
    console.log("favourite player is :"+" "+ fplayer);
    console.log("favourite movie name is :"+ " " + fmovie);
}
favorite()

function area(length,breadth){
    console.log("Area is"+" "+length*breadth);
}
area(10,12.34)
// return keyword
function myName(){
    return "Sweetsan"
}
var A=myName();
console.log(A);


function add(a,b){
    return(a+b);
}
var total=add(10,20);
console.log(total);

// if else condition
let homework=true;
if(homework){
    console.log(`Great job`);
}
else{
    console.log(`Finish your homework before playing`);
}

let season="spring";
if(season == "spring"){
    console.log(`Enjoy the blooming flower`);
}
if(season == "summer"){
console.log(`Have fun in the sun`);
}
        
if(season == "autumn"||"fall"){
console.log(`Admire colorful leaves`);
}
         



