// import app from './app';

// app();

import './app';
import { calculateBmi, calculateRetirement } from './app';

let calculateBMIButton = document.getElementById("calcBMIButton");
calculateBMIButton.addEventListener('click', ()=> {
    let heightFeet = document.getElementById("heightFeet").value;
    let heightInches = document.getElementById("heightInches").value;
    let weightPounds = document.getElementById("weightPounds").value;
    let bmiOutput = document.getElementById("bmiOutput");

    let errorMessage = "";
    if(isNaN(Number(heightFeet)) || isNaN(Number(heightInches)) || heightFeet == "" || heightInches == "")
        errorMessage += "Height should have a number value greater than 0; ";
    else if (Number(heightFeet)<=0 && Number(heightInches)<=0 )
        errorMessage += "Height should have a number value greater than 0; ";
    if(isNaN(Number(weightPounds)) || weightPounds == "" || Number(weightPounds)<=0)
        errorMessage += "Weight should have a number value greater than 0; ";
    
    
    if (errorMessage != ""){
        bmiOutput.innerHTML = errorMessage;
    } else {
        let bmi = calculateBmi(Number(heightFeet), Number(heightInches), Number(weightPounds));
        bmiOutput.innerHTML = bmi;
    }
    
});

let calculateRetirementButton = document.getElementById("calcRetirementButton");
calculateRetirementButton.addEventListener('click', ()=> {
    let currentAge = document.getElementById("currentAge").value;
    let salary = document.getElementById("salary").value;
    let percentage = document.getElementById("percentage").value;
    let goal = document.getElementById("goal").value;
    let retirementOutput = document.getElementById("retirementOutput");

    let currentAgeNum = Number(currentAge);
    let salaryNum = Number(salary);
    let percentageNum = Number(percentage);
    let goalNum = Number(goal);

    let errorMessage = "";

    if(currentAge == "")
        errorMessage += "Current age must not be empty; "
    else if(isNaN(currentAgeNum) || currentAgeNum < 0)
        errorMessage += "Current age must be greater than or equal to 0; "
    else if (currentAgeNum > 100)
        errorMessage += "Current age must be less than or equal to 100; "
    else if (currentAgeNum != currentAgeNum.toFixed(1))
        errorMessage += "Current age must be an integer; "

    if(salary == "")
        errorMessage += "Salary must not be empty; "
    else if(isNaN(salaryNum) || salaryNum <= 0)
        errorMessage += "Salary must be greater than  0; "

    if(percentage == "")
        errorMessage += "Percentage saved must not be empty; "
    else if(isNaN(percentageNum) || percentageNum <= 0)
        errorMessage += "Percentage saved must be greater than 0; "
    else if (percentageNum > 100)
        errorMessage += "Percentage saved must be less than or equal to 100; "
    else if (percentageNum != percentageNum.toFixed(1))
        errorMessage += "Percentage savedmust be an integer; "

    if(goalNum == "")
        errorMessage += "Goal must not be empty; "
    else if(isNaN(goalNum) || goalNum <= 0)
        errorMessage += "Goal must be greater than  0; "

    if (errorMessage != "")
        retirementOutput.innerHTML = errorMessage;
    else {
        let retirementAge = calculateRetirement(currentAge, salary, percentage, goal);
        retirementOutput.innerHTML = retirementAge;
    }
});

