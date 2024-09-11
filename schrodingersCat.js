function schrodingersCat() {
    // Quantum superposition: The cat is both alive and dead until observed
    const quantumState = Math.random() < 0.5;
    
    // Observe the cat's state
    if (quantumState) {
      return "The cat is alive";
    } else {
      return "The cat is dead";
    }
  }
  
  // Usage example
  console.log(schrodingersCat());