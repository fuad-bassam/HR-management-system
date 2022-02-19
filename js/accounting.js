let mainTable = document.getElementById("mainTable");

function getDataFromLocalStorge(){


var arr=[], getDataItem ,keys = Object.keys(localStorage);

// for(let x =0;x<keys.length;x++)
keys.forEach(x => {
     getDataItem =  JSON.parse( localStorage.getItem(x));
         
//    console.log(getDataItem.level ); 
arr.push(getDataItem);
});

return arr;
}

function tableHead(){

let tableRow =document.createElement("tr");
mainTable.appendChild(tableRow);



let tableHeaderNames = ["Department" ,"Employees","Total salary" ,"Average salary"]

// for(let x =0 ;x<tableHeaderNames.length;x++ )

tableHeaderNames.forEach(x => {
    // console.log(x);
    let tableTH =document.createElement("th");
    tableTH.textContent = x;
    tableRow.appendChild(tableTH);
});      



}

 
function tableBody(){
    var administrationSection=[] , marketingSection =[],developmentSection=[],financeSection =[]; 
    var numAdministration =0 , numMarketing=0 ,numDevelopment=0 ,numFinance =0 ;
   var data= getDataFromLocalStorge();

data.forEach( x => {

if(x.department =="Administration"){

administrationSection.push(x);
numAdministration++;

}else if (x.department =="Marketing"){

    marketingSection.push(x);
numMarketing++ ;

} else if (x.department =="Development"){

    developmentSection.push(x);
numDevelopment++;

} else if(x.department =="Finance"){

    financeSection.push(x);
numFinance++;

}else{
    console.log("wrong Section");
}

});

let administrationAvg, marketingAvg, developmentAvg, financeAvg ,TotalAvg;

if(numAdministration == 0){
     administrationAvg = 0}else{ 
         administrationAvg=(totalSalary(administrationSection)/numAdministration).toFixed( 1 );
        }

if(numMarketing == 0){ 
    marketingAvg = 0}else{
         marketingAvg=(totalSalary(marketingSection)/numMarketing).toFixed( 1 );
        }

if(numDevelopment == 0){
     developmentAvg = 0}else{ 
         developmentAvg=(totalSalary(developmentSection)/numDevelopment).toFixed(1);
        }
if(numFinance == 0){
     financeAvg = 0}else{
          financeAvg=(totalSalary(financeSection)/numFinance).toFixed( 1 );
        }

TotalAvg =(totalSalary(data)/data.length).toFixed( 0 );

addRow("Administration",numAdministration,totalSalary(administrationSection),administrationAvg);
addRow("Marketing", numMarketing,totalSalary(marketingSection),marketingAvg);
addRow("Development",numDevelopment,totalSalary(developmentSection),developmentAvg);
addRow("Finance",numFinance,totalSalary(financeSection),financeAvg);

addRow("Total",data.length,totalSalary(data),TotalAvg);
}



function creatTable(){

    tableHead();
    tableBody();
    tableFoot();
}



function totalSalary(arr){

     var count=0;
arr.forEach(x => {
   
  count=count+ x.salary
    
});

// console.log(count);
return count.toFixed(2)
}


function addRow(name ,numEmp ,avg ,total){

    let tableRow =document.createElement("tr");

    var tableTD1= document.createElement("td");
    
    var tableTD2= document.createElement("td");
    
    var tableTD3= document.createElement("td");
    
    var tableTD4= document.createElement("td");

    tableTD1.textContent =name;
    tableTD2.textContent=numEmp;
    tableTD3.textContent=avg;
    tableTD4.textContent=total;


    tableRow.appendChild(tableTD1);
    tableRow.appendChild(tableTD2);
    tableRow.appendChild(tableTD3);
    tableRow.appendChild(tableTD4);

    mainTable.appendChild(tableRow);
}

tableHead();

tableBody();