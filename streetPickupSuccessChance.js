function streetPickupSuccessChance(attractiveness, charisma, location) {
    // Base success rate (very low for street pickup)
    let successRate = 0.01;
  
    // Adjust for personal factors
    successRate += attractiveness * 0.02;
    successRate += charisma * 0.03;
  
    // Adjust for location
    if (location === "busy street") {
      successRate *= 0.5;
    } else if (location === "popular bar area") {
      successRate *= 1.5;
    }
  
    // Cap the success rate at 30%
    successRate = Math.min(successRate, 0.3);
  
    // Return success or failure
    return Math.random() < successRate ? "Success" : "Failure";
  }
  
  // Example usage
  console.log(streetPickupSuccessChance(7, 8, "popular bar area"));