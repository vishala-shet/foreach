var str = "shashi";  //js
var str1 = 'manu';
var str3 = `vinu`;
var str4 = new String('penga')  //object reference type
console.log(typeof str);
console.log(typeof str1);
console.log(typeof str3);
console.log(typeof str4.valueOf); //It returns the primitive value of the specified object.

var num = 10;
num = 10.3;
num = 10/5;
var num2= new Number(10)
console.log(typeof num);
console.log(typeof num2.valueOf);
//let //es6 onwards
//const //es6 onwards

var username;
var testnull = null;
var bool = true;
var bool1 = new Boolean()
console.log(typeof username);
console.log(typeof testnull);
console.log(typeof bool);
console.log(typeof bool1.valueOf);


var array = ["java","python",undefined,null,{},function () {},true]
var array2 = ["shashi","manu"];
 var str6 = "jaavscript";
//var totalArray = array.concat(array2);   //es5 way
//console.log(totalArray);
var es6way = [...array, ...array2,...str6];  //es6 way
var arrayintostring = array.toString();
var onemorewaytoconvertArrayintoString = array.join(`😃`);
console.log(arrayintostring);
console.log(onemorewaytoconvertArrayintoString);
console.log(typeof arrayintostring);
console.log(es6way);
var str5 = "hello javascript";
var arraylikeObject = Array.from(str5);
var [...newWay] = str;
var splitType = str5.split(" "); //es5 way split method converts string into array
var es6waytoconvertstringintoarray = Array.from(str5);
console.log(array.length);
console.log(array[0]);
for(var i=0;i<array.length;i++)
{
    console.log(array[i]);
}
console.log(typeof array);
console.log(Array.isArray(array));
console.log(Array.isArray(str5));
console.log(splitType);
console.log(splitType.length);  
console.log(es6waytoconvertstringintoarray);
arraylikeObject.forEach(x => console.log(x));
console.log(typeof newWay);
console.log(Array.isArray(newWay));

newWay.forEach(function(x){
    console.log(x);
});
var array3 = Array.of("shashi","kumar");
console.log(array3);
var array4 = Array(7);
console.log(array4);


var EmpData = [{
    name : "anu",
    age : 22,
    company : "Qspiders",
    salary : 10000,
    designation : "nodejs developer",
    skills : ["java","python","nodejs"]
},
 {
    name : "janu",
    age : 22,
    company : "Qspiders",
    salary : 10000,
    designation : "nodejs developer",
    skills : ["java","python","nodejs"]
}
];
console.log(EmpData);
// EmpData.name = "manu";
// console.log(typeof EmpData);
// console.log(EmpData['name']);
// console.log(EmpData.salary);
// console.log(EmpData.skills['0']);

// var obj = {
//     name: "vishala",
//     age: 22,
//     company: "Qspiders",
//     salary: 20000
// }

var obj = new Object();
obj.name = "deeksha";
obj.age = 22;
obj.company = "Qspiders";
obj.salary = 25000;
console.log(obj);

var test = Object.entries(obj);
console.log(test);


var obj1 = {
 name: "shaila",
 age: 20,
 salary: 50000,
 company: "Jspiders",
 location: "shimoga",
 id: 101,
 designation: "developer",
 joindate: "19-09-2019",
 empDetails: function(){
    document.write
    (`<h1>My name is ${this.name}😍</h1>
    <ul>
    <li> my age is ${this.age}</li>
    <li> my salary is ${this.salary}</li>
    <li> my company is ${this.company}</li>
    <li> my location is ${this.location}</li>
    <li> my id is ${this.id}</li>
    <li> my desinationis ${this.designation}</li>
    <li> my joining date is ${this.joindate}</li>
    </ul>
    `);
 }
};

obj1.empDetails();
