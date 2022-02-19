'use strict';

const listOfEmployee = [];

function employeeInformation(employeeID, fullName, department, level, personalImageURL) {

    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.personalImageURL = personalImageURL;
     listOfEmployee.push(this);
    this.salary = 0;
   

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



let main1 = document.getElementById("output");

// from task 8
employeeInformation.prototype.render2 = function () {
    // console.log(this)
this.salaryNumber();
this.employeeID= randId(this);
this.showEmpData();

}
// // from task 7
// // employeeInformation.prototype.render1 = function () {


// //     // document.write(`<h2 style ="margin-bottom : 0px ; color: rgb(62, 6, 114) ; ">${this.fullName}: ${this.salary}</h2>`);

// //     // listOfEmployee[x].salaryNumber();
// //     // listOfEmployee[x].render();

// //     let employeeName = document.createElement("h2")
// //     let employeeSalary = document.createElement("h3")

// //     employeeName.textContent = this.fullName
// //     employeeSalary.textContent = this.salary

// //     main1.appendChild(employeeName);
// //     main1.appendChild(employeeSalary);

// // }




//     // this.salaryNumber();
//     // this.randId();
//     // this.showCard();
//     console.log("here")
//     console.log(listOfEmployee)
// };


// for (let x = 0; x < listOfEmployee.length; x++) {
//     console.log(listOfEmployee[x]);


//     listOfEmployee[x].salaryNumber();
//     listOfEmployee[x].render1();
//     // console.log(listOfEmployee[x]);
// }


function randId(x) {
    let id,subId;

 console.log(x.department)

    if (x.department == "Administration") {
       subId = 1;
    } else if (x.department == "Marketing") {
       subId = 2;
    } else if (x.department == "Development") {
        subId = 3 ;
    } else if (x.department =="Finance"){
        subId = 4;

    }

    

    var max = 999
    var min = 100
    id = Math.floor(Math.random() * (max - min)) + min;
 id = subId +""+ id ;
    // checkId
    for (let xs = 0; xs < listOfEmployee.length; xs++) {
        
        if (id == listOfEmployee[xs].employeeID) {
            randId()
            // console.log("sdsdd");
         
        }
    }
   return id;
}


document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    addEmployeeData(event);
})

function addEmployeeData(event) {


            
    let fullName1 =  event.target.full_Name.value;
    let department1 =  event.target.department.value;
    let level =   event.target.level.value;
    let personalImageURL =   event.target.imag.value;



    // console.log(fullName1)

    let newEmp = new employeeInformation(0, fullName1, department1, level, personalImageURL)
   
    newEmp.render2();
         addDataItem(newEmp);
        //  getAllData();
    // console.log("bagetJson");
}



employeeInformation.prototype.showEmpData = function () {



    let divToShow = document.createElement("div");
    // divToShow.id=this.id;
    divToShow.className ="divToShow"
  

   
// console.log(this.personalImageURL);
    let imageUrl = document.createElement("img");

    imageUrl.setAttribute("src", this.personalImageURL);

    imageUrl.className ="imgDivToShow";
    
    
    divToShow.appendChild(imageUrl);

    let empName = document.createElement("h3");
    empName.textContent = "Name :" + this.fullName;
    divToShow.appendChild(empName);

    let empId = document.createElement("h3");
    empId.textContent = "ID :" + this.employeeID;
    divToShow.appendChild(empId);

    let empDepartment = document.createElement("h3");
    empDepartment.textContent = "Department :" + this.department;
    divToShow.appendChild(empDepartment);

    let empLevel = document.createElement("h3");
    empLevel.textContent = "level :" + this.level;
    divToShow.appendChild(empLevel);

    let empSalary = document.createElement("h3");
    empSalary.textContent = "Slary :" + this.salary;
    divToShow.appendChild(empSalary);


    main1.appendChild(divToShow);

}


//localStorage functions
////////////////////////////////////////////////////////////////
function addDataItem(newEmp){
   let upData =   JSON.stringify(newEmp)
    
    // console.log(newEmp.employeeID)
    localStorage.setItem(newEmp.employeeID,upData);


}

function getAllData(){

    var xxx = Object.keys(localStorage)
   
    var getJson ;
        // console.log(xxx);
        // console.log(xxx.length);
for (let i = 0 ;i<xxx.length;i++){

getJson=JSON.parse(localStorage.getItem(xxx[i]))

// console.log(getJson);

var empFix= new employeeInformation(getJson.employeeID ,getJson.fullName ,getJson.department ,getJson.level ,getJson.personalImageURL)
empFix.salary =getJson.salary;
// console.log(getJson.fullName);
   
}



    //  (var a in localStorage) {
        // console.log(a, ' = ', localStorage[a]);
// let aa = localStorage.getItem(a)
// let getJson = JSON.parse(aa)
// /console.log(a);

// console.log(aa);
// console.log(getJson);
//()
}
function renderFromLocalStorge(){

getAllData();
if(listOfEmployee.length !=null){
for(let i =0 ;i<listOfEmployee.length;i++){
listOfEmployee[i].showEmpData();

}

}}


renderFromLocalStorge()
// }

//////////////////////////////////////////////////////////////////

