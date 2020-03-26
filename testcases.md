# Test Cases

## Functions

### calculateBmi (heightFeet, heightInches, weightPounds)

COnstraints: heightFeet, heightInches, weightPounds are numbers
Underweight = <18.5; Normal weight = 18.5–24.9; Overweight = 25–29.9; Obese = BMI of 30 or greater

it should output "underweight"
expect that calculateBmi(5, 3, 101.7) to return 18.4 and "underweight"
expect that calculateBmi(6, 2, 63.6) to return 8.4 and "underweight"
expect that calculateBmi(6, 2, 139.942) to return 18.4 and "underweight"

it should output "normal weight"
expect that calculateBmi(5, 3, 125) to return 22.7 and "normal weight"
expect that calculateBmi(6, 2, 140.7) to return 18.5 and "normal weight"
expect that calculateBmi(6, 2, 189.654) to return 24.9 and "normal weight"

it should output "overweight"
expect that calculateBmi(5, 3, 137.261) to return 22.7 and "overweight"
expect that calculateBmi(6, 2, 190.139) to return 25.0 and "overweight"
expect that calculateBmi(6, 2, 210) to return 27.6 and "overweight"
expect that calculateBmi(6, 2, 227.406) to return 29.9 and "overweight"

it should output "obese"
expect that calculateBmi(5, 3, 165.375) to return 30.0 and "obese"
expect that calculateBmi(6, 2, 228.167) to return 30.0 and "obese"
expect that calculateBmi(6, 2, 231.18) to return 30.4 and "obese"

it should output null when inputs are less than or equal to 0
expect that calculateBmi(0, 0, 0) to return null and "obese"
expect that calculateBmi(-1 , -1, -1) to return null and "obese"

### calculateBMIButton on event click

it should validate input
expect that (0, 0, 0) displays "Height should have a value greater than 0; Weight should have a value greater than 0"
expect that ("", "", "") displays "Height should have a value greater than 0; Weight should have a value greater than 0"
expect that ("Some string", "Some other string", "some string") displays "Height should be a number; Weight should be a number"

it should send height in feet properly to calculateBmi
expect that (4, 10, 200) displays "BMI: 42.8 obese"
expect that (6, 10, 200) displays "BMI: 21.4 normal weight"

it should send height in inches properly to calculateBmi
expect that (4, 0, 90) displays "BMI: 28.1 overweight"
expect that (4, 12, 200) displays "BMI: 18 underweight"

it should send weight properly to calculateBmi
expect that (4, 0, 90) displays "BMI: 28.1 overweight"
expect that (4, 0, 150) displays "BMI: 46.9 obese"

### calculateRetirement (currentAge, salary, percentageSaved, goal)

it should calculate retirement age correctly
expect that (22, 100000, 10, 401000) to return 51.7
expect that (25, 100, 1, 100) to return 99
expect that (25, 100, 100, 100) to return 25.7
expect that (25, 99, 1, 100) to return 100

it should return null when currentAge is greater than or equal to 100
expect that (100, 1, 1, 1) to return null

<!-- it should return null when percentageSaved is greater than 100 or less than 0
expect that (1, 1, 101, 1) to return null
expect that (1, 1, -1, 1) to return null

it should return null when currentAge is less than or equal to 0
expect that (-1, 1, 1, 1) to return null

it should return null when salary is less than or equal to 0
expect that (1, -3, 1, 1) to return null

it should return null when goal is less than or equal to 0
expect that (1, 1, 1, -1) to return null -->

### calculateRetirementButton on event click

it should validate input
expect that (0, 0, 0) displays "Height should have a value greater than 0; Weight should have a value greater than 0"
expect that ("", "", "") displays "Height should have a value greater than 0; Weight should have a value greater than 0"
expect that ("Some string", "Some other string", "some string") displays "Height should be a number; Weight should be a number"

it should send currentAge properly to calculateRetirement

it should send salary properly to calculateRetirement

it should send percentageSaved properly to calculateRetirement

it should send goal properly to calculateRetirement


