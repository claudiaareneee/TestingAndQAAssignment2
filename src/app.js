export const calculateBmi = (heightFeet, heightInches, weightPounds) => {
  const weight = weightPounds * 0.45;
  const height = ((heightFeet * 12.0) + heightInches) * .025;

  let answer = height*height;
  answer = weight/answer;

  // console.log(heightFeet, heightInches, weightPounds)
  // console.log(answer);

  // answer = Math.round((answer + Number.EPSILON) * 10) / 10
  answer = answer.toFixed(1)

  let answerString = "BMI: " + answer.toString();

  if (answer < 18.5)
    return answerString + " underweight";
  else if (answer < 25)
    return answerString + " normal weight";
  else if (answer < 30)
    return answerString + " overweight";
  else if (answer >= 30) 
    return answerString + " obese";
  else
    return null;
};

// age = (goal/(sallary*(percentageSaved*1.35))) + age
export const calculateRetirement = (currentAge, salary, percentageSaved, goal) =>{
  let age = (goal / (salary * (percentageSaved*1.35/100))) + currentAge
  age = Math.ceil(age);

  if (age <= 100){
    let answerString = "Retirement age: " + age.toString() + ", Goal is attainable";
    return answerString

  } else {
    let answerString = "Retirement age: " + age.toString() + ", Goal is unattainable";
    return answerString
  }
}