// function show(){
//     console.log('hello show function');
// }
// function anotherfunction(callback){
//     callback()
// }
// anotherfunction(show); //calling function

// function User(name, age, company, salary){
//     this.name = name;
//     this.age = age;
//     this.company = company;
//     this.salary = salary;
// }
//  let User1 = new User("manu", 20, "Qspiders",30000);
//  let User2 = new User("shashi",30,"Jspiders",34000);
// console.log(User1);
// console.log(User2);

//var languages = ["java","python","c"];
//languages.pop(); It removes last element
//languages.shift();  //It removes first element
//languages.push("angular"); //Adding new element to the end of the array
//languages.unshift("angular");  //adding new element to the start of an array
//languages.splice(0,1,"c++");  //removes element from an array if necessary adding other element to an array
//languages.splice(1,0,"cython"); //If we want to add new element withot removing anything
//languages.splice(1);  //It wl return that perticular index element
// for(var i=0;i<languages.length;i++){
// console.log(languages[i]);
//}
//languages.forEach(function(value,index,array){
    // console.log(index);
    // console.log(value);
    // console.log(array);
    //console.log(`${index}:${value}`);
//});
//console.log(languages);


var employees = [
    {
        emp_name: "manu",
        emp_age: 20,
        emp_gender: "male",
        emp_photo: "https://image.shutterstock.com/image-photo/side-view-male-blogger-browsing-600w-1027895221.jpg",
        emp_company: "capgemini",
        emp_salary: 20000,
        emp_designation: "web developer",
        emp_doj: new Date('2015/05/05'),
        emp_location: "mandya",
        emp_education: "BE"
    },
    {
        emp_name: "anu",
        emp_age: 30,
        emp_gender: "female",
        emp_photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg",
        emp_company: "thomas reuters",
        emp_salary: 50000,
        emp_designation: "web developer",
        emp_doj: new Date('2015/03/04'),
        emp_location: "manglore",
        emp_education: "BE"   
    },
    {
        emp_name: "chandana",
        emp_age: 25,
        emp_gender: "female",
        emp_photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg",
        emp_company: "oracle",
        emp_salary: 50000,
        emp_designation: "web developer",
        emp_doj: new Date('2016/05/06'),
        emp_location: "banglore",
        emp_education: "BE"    
    },
    {
        emp_name: "deeksha",
        emp_age: 35,
        emp_gender: "female",
        emp_photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg",
        emp_company: "accenture",
        emp_salary: 35000,
        emp_designation: "web developer",
        emp_doj: new Date('2017/03/03'),
        emp_location: "shimoga",
        emp_education: "BE"       
    },
];
var emp = [];
employees.forEach(empData => {
emp.push(`<div class="card" style="width: 18rem;">
<img src="${empData.emp_photo}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${empData.emp_name}</h5>
  <span class="badge badge-success" float-right">${empData.emp_id}</span><br>
  <hr class="hr">
  <span class="badge badge-primary float-right">${empData.emp_designation}</span><br> 
  <li class="list-group-item">Salary: ${empData.emp_salary}</li>
  <li class="list-group-item">Location: ${empData.emp_location}</li>
  <li class="list-group-item">Education: ${empData.emp_education}</li>
  <li class="list-group-item">Age: ${empData.emp_age}</li>
  <li class="list-group-item">Company: ${empData.emp_company}</li>
  <li class="list-group-item">Gender: ${empData.emp_gender}</li>
  <li class="list-group-item">Date of joining: ${empData.emp_doj.toString()}</li>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`);
});

document.getElementById("template").innerHTML = emp;