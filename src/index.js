// import app from './app';

// app();

import './app';
import { calculateBmi } from './app';

let calculateBMIButton = document.getElementById("calcBMIButton");
calculateBMIButton.addEventListener('click', ()=> {
    let heightFeet = document.getElementById("heightFeet").value;
    let heightInches = document.getElementById("heightInches").value;
    let weightPounds = document.getElementById("weightPounds").value;
    let bmiOutput = document.getElementById("bmiOutput");

    let bmi = calculateBmi(Number(heightFeet), Number(heightInches), Number(weightPounds))
    
    if (bmi != null)
        bmiOutput.innerHTML = "BMI: " + bmi;
});