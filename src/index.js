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
    if(isNaN(Number(heightFeet)) || isNaN(Number(heightInches)) || heightFeet == "" || heightInches == "" ||Number(heightFeet)<=0 ||Number(heightInches)<=0 )
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

    let retirementAge = calculateRetirement(Number(currentAge), Number(salary), Number(percentage), Number(goal));
    
    if (retirementAge != null)
        retirementOutput.innerHTML = retirementAge;
});

