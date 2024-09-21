// Function to calculate the probability of becoming a billionaire
function calculateBillionaireProbability(age, educationLevel, currentNetWorth, riskTolerance, entrepreneurialSkill) {
    /*
    Parameters:
    - age: Number (e.g., 30)
    - educationLevel: String ('none', 'high school', 'bachelor', 'master', 'phd')
    - currentNetWorth: Number (in millions of dollars)
    - riskTolerance: Number (from 0 to 1, where 1 is very high risk tolerance)
    - entrepreneurialSkill: Number (from 0 to 1, where 1 is highly skilled)
    */

    // Base probability (starting point)
    let probability = 0.000001; // Very low base probability

    // Adjust probability based on age
    if (age >= 18 && age <= 25) {
        probability *= 1.5;
    } else if (age > 25 && age <= 35) {
        probability *= 1.3;
    } else if (age > 35 && age <= 50) {
        probability *= 1.1;
    } else if (age > 50 && age <= 65) {
        probability *= 0.9;
    } else {
        probability *= 0.7;
    }

    // Adjust probability based on education level
    switch (educationLevel.toLowerCase()) {
        case 'none':
            probability *= 0.8;
            break;
        case 'high school':
            probability *= 0.9;
            break;
        case 'bachelor':
            probability *= 1;
            break;
        case 'master':
            probability *= 1.1;
            break;
        case 'phd':
            probability *= 1.2;
            break;
        default:
            probability *= 1; // No change if education level is unrecognized
    }

    // Adjust probability based on current net worth
    if (currentNetWorth >= 500) { // $500 million or more
        probability *= 10;
    } else if (currentNetWorth >= 100) { // $100 million to $499 million
        probability *= 5;
    } else if (currentNetWorth >= 10) { // $10 million to $99 million
        probability *= 2;
    } else if (currentNetWorth >= 1) { // $1 million to $9 million
        probability *= 1.5;
    } else {
        probability *= 1; // Less than $1 million
    }

    // Adjust probability based on risk tolerance
    probability *= (1 + riskTolerance);

    // Adjust probability based on entrepreneurial skill
    probability *= (1 + entrepreneurialSkill);

    // Ensure the probability does not exceed 100%
    if (probability > 1) {
        probability = 1;
    }

    // Convert probability to a percentage
    let probabilityPercentage = (probability * 100).toFixed(6);

    // Return the probability percentage
    return probabilityPercentage + '%';
}

// Example usage of the function
let age = 30;
let educationLevel = 'Bachelor';
let currentNetWorth = 2; // In millions of dollars
let riskTolerance = 0.8; // High risk tolerance
let entrepreneurialSkill = 0.9; // Highly skilled entrepreneur

let probability = calculateBillionaireProbability(age, educationLevel, currentNetWorth, riskTolerance, entrepreneurialSkill);
console.log(`The probability of becoming a billionaire is approximately ${probability}.`);
