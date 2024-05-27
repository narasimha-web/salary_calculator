function salary_calculate(){
   const net_amount =  parseInt(document.getElementById("Net_Salary").value);
   const hours_inday = parseInt(document.getElementById("hours").value);
   const  year= parseInt(document.getElementById("years").value);
   const weeks = parseInt(document.getElementById("week").value);
   const calculation_months = document.getElementById("Monthly");
   const calculation_year = document.getElementById("yearly");
const age = document.getElementById("age");


// monthly amount calculation
document.getElementById("monthly").innerHTML = net_amount;
const yearly_salary = net_amount * 12 ; 
document.getElementById("yearly").innerHTML = yearly_salary;

//yearly amount calculation
const year_working = yearly_salary * year;
document.getElementById("total_amount").innerHTML = year_working;
document.getElementById("no_year").innerHTML = year;

//daily amount calculation

const daily_amount  = net_amount / 24 ;
document.getElementById("daily").innerHTML = daily_amount.toFixed(2);
//weekly amount

const wekly_amount = daily_amount * weeks;
document.getElementById("Weekly").innerHTML = wekly_amount.toFixed(2);

// hourly amount calculation
const hourly_amount = daily_amount / hours_inday;
document.getElementById("hourly").innerHTML = hourly_amount .toFixed(2);

//form validation

}



