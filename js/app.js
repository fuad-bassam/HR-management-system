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
        var levelPrompt = prompt("Please enter your level").toLowerCase();
        this.level = levelPrompt;
        this.salaryNumber();
    }

 salaryWithoutTax= Math.floor(Math.random() * (max - min) ) + min;

 this.salary = salaryWithoutTax - salaryWithoutTax * 0.075 ;

}

let Ghazi_Samer = new employeeInformation (1000 ,"Ghazi Samer" , "Administration ", "senior" ,"URL");
let Lana_Ali = new employeeInformation (1001 ,"Lana Ali" , "Finance ", "senior" ,"URL");
let Tamara_Ayoub = new employeeInformation (1002 ,"Tamara Ayoub" , "Marketing ", "senior" ,"URL");
let Safi_Walid = new employeeInformation (1002 ,"Safi Walid" , "Administration ", "mid-senior" ,"URL");
let Omar_Zaid = new employeeInformation (1004 ,"Omar Zaid" , "Development ", "senior" ,"URL");
let Rana_Saleh = new employeeInformation (1005 ,"Rana Saleh" , "Development ", "junior" ,"URL");
let Hadi_Ahmad = new employeeInformation (1006 ,"Hadi Ahmad" , "Finance ", "mid-senior" ,"URL");

// Ghazi_Samer.

let main1=document.getElementById("mainBody");
main1.textContent = "dddddddd";
employeeInformation.prototype.render1 = function () {


    // document.write(`<h2 style ="margin-bottom : 0px ; color: rgb(62, 6, 114) ; ">${this.fullName}: ${this.salary}</h2>`);
    
            // listOfEmployee[x].salaryNumber();
            // listOfEmployee[x].render();
    
        let employeeName = document.createElement("h2")
        let employeeSalary =document.createElement("h3")
        
        employeeName.textContent=this.fullName
        employeeSalary.textContent =this.salary

       main1.appendChild(employeeName);
       main1.appendChild(employeeSalary);
    
       }

      
   
    // let main1=document.getElementsByTagName("main") 
//  console.log(listOfEmployee);
    for(let x=0;x<listOfEmployee.length;x++){
        console.log(listOfEmployee[x]);
        
//         // document.write(`<h2 style ="margin-bottom : 0px ; color: rgb(62, 6, 114) ; ">${this.fullName}: ${this.salary}</h2>`);
//         listOfEmployee[x].getSalary();
//         listOfEmployee[x].render();
// };

listOfEmployee[x].salaryNumber();
listOfEmployee[x].render1();
console.log(listOfEmployee[x]);
 }
 
