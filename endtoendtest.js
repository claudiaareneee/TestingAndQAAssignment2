import { Selector } from 'testcafe';

fixture `Calculator App`
    .page `http://localhost:3000/`;
    
test('UI should display BMI information correctly', async t => {
    await t
        .typeText('#heightFeet', '1')
        .typeText('#heightInches', '1')
        .typeText('#weightPounds', '1')
        .click('#calcBMIButton')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#bmiOutput').innerText).eql('BMI: 4.3 underweight');
});

test('UI should display retirement information correctly', async t => {
    await t
        .typeText('#currentAge', 'x')
        .typeText('#salary', '-3')
        .typeText('#percentage', '400')
        .click('#calcRetirementButton')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#retirementOutput').innerText).eql('Current age must be greater than or equal to 0; Salary must be greater than 0; Percentage saved must be less than or equal to 100; Goal must not be empty;');
});