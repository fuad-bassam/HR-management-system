'use strict';

const listOfEmployee=[];
function employeeInformation(employeeID, fullName, department, level, personalImageURL) {

    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.personalImageURL = personalImageURL;
    this.salary = 0;
    listOfEmployee.push(this) ;

}
employeeInformation.prototype.render1 = function () {
    // let main1=document.getElementById("mainBody");
    let main1=document.getElementsByTagName("main") 

    for(let x;x<listOfEmployee.length;x++){
        
    let employeeName = document.createElement("h2")
    let employeeSalary =document.createElement("h3")
    
    employeeName.textContent=this.fullName
    employeeSalary.textContent =this.salary
   main1.appendChild(employeeName);
   main1.appendChild(employeeSalary);

    }
  
}
employeeInformation.prototype.salaryNumber = function () {
    var min, max,salaryWithoutTax;
    if (this.level == "junior") {
        min = 500;
        max = 1000;
    } else if (this.level == "mid-senior") {
        min = 1000;
        max = 1500;
    } else if (this.level == "senior") {
        min = 1500;
        max = 2000;
    } else {
        var levelPrompt = prompt("Please enter your level").toLowerCase;
        this.level = levelPrompt;
        this.salaryNumber();
    }

 salaryWithoutTax= Math.floor(Math.random() * (max - min) ) + min;

 this.salary = salaryWithoutTax - salaryWithoutTax * 0.075 ;

}

 var ahmad =new employeeInformation(12,"ffff","ffg","senior","u")
 ahmad.salaryNumber;
 console.log(document.getElementsByTagName("main") );
ahmad.render1;
var ahmad2 =new employeeInformation(12,"ffff","ffg","senior","u")
ahmad2.salaryNumber;
ahmad2.render1;
var ahmad3 =new employeeInformation(12,"ffff","ffg","senior","u")
ahmad3.salaryNumber;
ahmad3.render1;
var ahmad4 =new employeeInformation(12,"ffff","ffg","senior","u")
ahmad4.salaryNumber;
console.log(ahmad4.salary)
ahmad4.render1;

