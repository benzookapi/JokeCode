function predictHumanExtinction(currentYear, factors) {
    let extinctionYear = currentYear + 10000;
    if (factors.climateChangeSeverity) {
        extinctionYear -= factors.climateChangeSeverity * 5000;
    }
    if (factors.globalConflictLevel) {
        extinctionYear -= factors.globalConflictLevel * 3000;
    }
    if (factors.technologicalAdvancement) {
        extinctionYear += factors.technologicalAdvancement * 2000;
    }
    if (factors.globalPandemicRisk) {
        extinctionYear -= factors.globalPandemicRisk * 2000;
    }
    if (factors.aiRisk) {
        extinctionYear -= factors.aiRisk * 3000;
    }
    let yearsUntilExtinction = extinctionYear - currentYear;
    if (yearsUntilExtinction < 0) {
        yearsUntilExtinction = 0;
    }
    return yearsUntilExtinction;
}

let currentYear = new Date().getFullYear();
let factors = {
    climateChangeSeverity: 0.7,        // Value between 0 and 1
    globalConflictLevel: 0.5,          // Value between 0 and 1
    technologicalAdvancement: 0.8,     // Value between 0 and 1
    globalPandemicRisk: 0.3,           // Value between 0 and 1
    aiRisk: 0.2                        // Value between 0 and 1
};

let yearsLeft = predictHumanExtinction(currentYear, factors);
console.log("Estimated years until human extinction: " + yearsLeft);
