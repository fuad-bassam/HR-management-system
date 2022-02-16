'use strict';

const listOfEmployee = [];

function employeeInformation(employeeID, fullName, department, level, personalImageURL) {

    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.personalImageURL = personalImageURL;
    this.salary = 0;
    listOfEmployee.push(this);

}


employeeInformation.prototype.salaryNumber = function () {
    var min, max, salaryWithoutTax;
    if (this.level == "Junior") {
        min = 500;
        max = 1000;
    } else if (this.level == "Mid-Senior") {
        min = 1000;
        max = 1500;
    } else if (this.level == "Senior") {
        min = 1500;
        max = 2000;
    } else {
        var levelPrompt = prompt("Please enter your level").toLowerCase();
        this.level = levelPrompt;
        this.salaryNumber();
    }

    salaryWithoutTax = Math.floor(Math.random() * (max - min)) + min;

    this.salary = salaryWithoutTax - salaryWithoutTax * 0.075;

}

// let Ghazi_Samer = new employeeInformation (randId() ,"Ghazi Samer" , "Administration ", "senior" ,"URL");
// let Lana_Ali = new employeeInformation (randId() ,"Lana Ali" , "Finance ", "senior" ,"URL");
// let Tamara_Ayoub = new employeeInformation (randId() ,"Tamara Ayoub" , "Marketing ", "senior" ,"URL");
// let Safi_Walid = new employeeInformation (1002 ,"Safi Walid" , "Administration ", "mid-senior" ,"URL");
// let Omar_Zaid = new employeeInformation (1004 ,"Omar Zaid" , "Development ", "senior" ,"URL");
// let Rana_Saleh = new employeeInformation (1005 ,"Rana Saleh" , "Development ", "junior" ,"URL");
// let Hadi_Ahmad = new employeeInformation (1006 ,"Hadi Ahmad" , "Finance ", "mid-senior" ,"URL");

// Ghazi_Samer.

let main1 = document.getElementById("mainBody");
// from task 7
employeeInformation.prototype.render1 = function () {


    // document.write(`<h2 style ="margin-bottom : 0px ; color: rgb(62, 6, 114) ; ">${this.fullName}: ${this.salary}</h2>`);

    // listOfEmployee[x].salaryNumber();
    // listOfEmployee[x].render();

    let employeeName = document.createElement("h2")
    let employeeSalary = document.createElement("h3")

    employeeName.textContent = this.fullName
    employeeSalary.textContent = this.salary

    main1.appendChild(employeeName);
    main1.appendChild(employeeSalary);

}

// from task 8
employeeInformation.prototype.render2 = function () {


    // this.salaryNumber();
    // this.randId();
    // this.showCard();
console.log("here")
console.log(listOfEmployee)
  };


for (let x = 0; x < listOfEmployee.length; x++) {
    console.log(listOfEmployee[x]);

    //         // document.write(`<h2 style ="margin-bottom : 0px ; color: rgb(62, 6, 114) ; ">${this.fullName}: ${this.salary}</h2>`);
    // };

    listOfEmployee[x].salaryNumber();
    listOfEmployee[x].render1();
    console.log(listOfEmployee[x]);
}
 function randId(){
let id;
var max =9999
var min=1000
id =Math.floor(Math.random() * (max - min)) + min;
checkId(id);
return id;
}

function checkId(id){


    for(let xs=0; xs<listOfEmployee.length ;xs++){
// if(listOfEmployee.length != 0){

        if ( id == listOfEmployee[xs].employeeID ){
            randId()
                console.log("sdsdd");
                break;
        }
    }
// }
}
document.getElementById("submitt").addEventListener("click",function(event){
    event.preventDefault();

   addEmployeeData ();
})

function addEmployeeData(){
// employeeID



let fullName1 ='default' ;
let department1= 'Development' ;
 let level ='junior' ;
 let personalImageURL='https://thumbs.dreamstime.com/b/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-107388687.jpg'

fullName1 = document.getElementById("full_Name") ;
department1 =document.getElementById("department");
level = document.getElementById("level");
 personalImageURL= document.getElementById("imag") ;

fullName1.op
 let newEmp= new employeeInformation(randId,fullName1,department1,level,personalImageURL)
 newEmp.render2 ();
 console.log("bass");
}