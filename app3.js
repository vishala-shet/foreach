function username(name,age,company,salary){
console.log(`
my name is ${name} and my age is ${age} and I work for ${company}and I am getting ${salary}
`);
}
username("shashi",30,"Qspiders",30000);  //parameter values


function addNumbers(a,b){
    var c= a+b;
    return c;     //always return statement is optional instead of return we can use
}
console.log(addNumbers(3,5));


//es5
function numbers(num){
    if(num===undefined){
        num =10*2;
    }
    console.log(num);
}
numbers();

//es6 way
function numberwithEs6(num1 = 10) {
    console.log(num1);
}
numberwithEs6();

//funciton arguments do not use javascript reserve keywords//

function names(args){
    //console.log("my name is" , args);
    //var names = Array.from(arguments)
    var [...names] = arguments;
    names.forEach(function(name){
        console.log(name);
    });
}
names("shashi","manu","anu");


username();
function username(){
    console.log("my name is manu");    //function hoisting mechanism works with naming function
}


// company();
// var company=function(){
//     console.log('my company is Qspiders');
// } //Uncaught error

var x="hello x";  //global variable
function show() {
var outerText = "hello inner block"; //local
function innerBlock(){
var innerText = "hello innerText" //
console.log(innerText);
console.log(outerText); //closure...
console.log(x);
}
innerBlock();
}
show();

function test(){
    document.write('hello test');
}  //normal naming function

//fat arrow function //es6 //fat arrow does not support naming function, always works with annonuymous function
() => {

}


var username = function(){
    console.log("hello username");
} //normal function

//es6 Arrow funtion

var usernamewithEs6 = () => {
    console.log("hello Arrow function...");
}
usernamewithEs6();


var username = function(name){
    return name;
}; //normal function
console.log(username("manu")); //normal function calling

//es6 Arrow function
var usernamewithEs6 = name => name;
console.log(usernamewithEs6("shashi")); //es6 fat Arrow callings

   //normal function having argument object , fat Arrow does not have argument object.
   
//    var usernamewithEs6 = () => {
//        return arguments;// error
//    };
//    console.log(usernamewithEs6("shashi")); //es6 fat Arrow calling

   var usernamewithEs6 = (...args) => {
       return args;
   };
   console.log(usernamewithEs6("shashi","manu"));


   var users ={
       name: "anu",
       age: 20,
       company: "Qspiders",
       salsary: 20000,
       userInfo: function(){
           console.log(`name is ${this.name}
           and the age is ${this.age} work for ${this.company} i am getting ${this.salary}`);    
       }
   };  //normal function

//    var user2 = {
//     name: "anu",
//     age: 20,
//     company: "Qspiders",
//     salsary: 20000,
//     userInfo: () => {
//         console.log(`name is ${this.name}
//            and the age is ${this.age} work for ${this.company} i am getting ${this.salary}`);    
//     }
//    } //fat arrow will not bind this keyword.
//    users.userInfo();
//    user2.userInfo();

   var user2 = {
    name: "anu",
    age: 20,
    company: "Qspiders",
    salsary: 20000,
    userInfo: () => {
        console.log(`name is ${user2.name}
           and the age is ${user2.age} work for ${user2.company} i am getting ${user2.salary}`);    
    }
   } 
   user2.userInfo(); // in this way fat arrow will works+







   

