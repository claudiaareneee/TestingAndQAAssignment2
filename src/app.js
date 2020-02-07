export const calculateBmi = (heightFeet, heightInches, weightPounds) => {
  const weight = weightPounds * 0.45;
  const height = ((heightFeet * 12.0) + heightInches) * .025;

  let answer = height*height;
  answer = weight/answer;

  console.log(heightFeet, heightInches, weightPounds)
  console.log(answer);

  let answerString = answer.toString();

  if (answer <= 18.5)
    return answerString + " underweight";
  else if (answer < 25)
    return answerString + " normal weight";
  else if (answer < 30)
    return answerString + " overweight";
  else 
    return answerString + " obese";

  return null;
};

export const calculateRetirement = (currentAge, salary, percentageSaved, goal) =>{
  return null
}