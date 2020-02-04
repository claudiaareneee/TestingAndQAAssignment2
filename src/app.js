export const calculateBmi = (heightFeet, heightInches, weightPounds) => {
  const weight = weightPounds * 0.45359237;
  const height = (heightFeet * 12.0 + heightInches) * .0254;

  let answer = height*height;
  answer = weight/answer;

  console.log(heightFeet, heightInches, weightPounds)
  console.log(answer);

  if (answer < 18.5)
    return "underweight";
  else if (answer < 25)
    return "normal weight";
  else if (answer < 30)
    return "overweight";
  else 
    return "obese";

  return null;
};

export const calculateRetirement = (currentAge, salary, percentageSaved, goal) =>{
  return null
}