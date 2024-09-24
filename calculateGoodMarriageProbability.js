// Function to calculate the probability of having a good marriage
function calculateGoodMarriageProbability(age, communicationSkill, emotionalIntelligence, sharedInterests, commitmentLevel) {
    /*
    Parameters:
    - age: Number (e.g., 30)
    - communicationSkill: Number (from 0 to 1, where 1 is excellent communication skills)
    - emotionalIntelligence: Number (from 0 to 1, where 1 is highly emotionally intelligent)
    - sharedInterests: Number (from 0 to 1, representing the degree of shared interests)
    - commitmentLevel: Number (from 0 to 1, where 1 is highly committed)
    */

    // Base probability (starting point)
    let probability = 0.5; // Starting from 50%

    // Adjust probability based on communication skills
    probability += (communicationSkill - 0.5) * 0.4; // Adjust by up to ±20%

    // Adjust probability based on emotional intelligence
    probability += (emotionalIntelligence - 0.5) * 0.3; // Adjust by up to ±15%

    // Adjust probability based on shared interests
    probability += (sharedInterests - 0.5) * 0.2; // Adjust by up to ±10%

    // Adjust probability based on commitment level
    probability += (commitmentLevel - 0.5) * 0.3; // Adjust by up to ±15%

    // Ensure the probability is between 0% and 100%
    if (probability > 1) {
        probability = 1;
    } else if (probability < 0) {
        probability = 0;
    }

    // Convert probability to a percentage
    let probabilityPercentage = (probability * 100).toFixed(2);

    // Return the probability percentage
    return probabilityPercentage + '%';
}

// Example usage of the function
let age = 30;
let communicationSkill = 0.8; // Good communication skills
let emotionalIntelligence = 0.7; // Above average emotional intelligence
let sharedInterests = 0.6; // Some shared interests
let commitmentLevel = 0.9; // High commitment

let probability = calculateGoodMarriageProbability(age, communicationSkill, emotionalIntelligence, sharedInterests, commitmentLevel);
console.log(`The probability of having a good marriage is approximately ${probability}.`);
