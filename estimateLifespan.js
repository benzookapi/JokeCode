function estimateLifespan(age, lifestyle, familyHistory, country) {
    // Base life expectancy
    let lifeExpectancy = 75;
  
    // Adjust for current age
    lifeExpectancy = Math.max(lifeExpectancy, age + 5);
  
    // Lifestyle factors
    if (lifestyle === "healthy") {
      lifeExpectancy += 5;
    } else if (lifestyle === "unhealthy") {
      lifeExpectancy -= 5;
    }
  
    // Family history
    if (familyHistory === "longevity") {
      lifeExpectancy += 3;
    } else if (familyHistory === "health issues") {
      lifeExpectancy -= 3;
    }
  
    // Country factor (simplified)
    if (country === "high life expectancy") {
      lifeExpectancy += 2;
    } else if (country === "low life expectancy") {
      lifeExpectancy -= 2;
    }
  
    // Add some randomness (plus or minus 5 years)
    lifeExpectancy += Math.floor(Math.random() * 11) - 5;
  
    return Math.round(lifeExpectancy);
  }
  
  // Example usage
  const estimatedAge = estimateLifespan(30, "healthy", "longevity", "high life expectancy");
  console.log(`Estimated lifespan: ${estimatedAge} years`);