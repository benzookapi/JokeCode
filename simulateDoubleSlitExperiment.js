// Function to simulate the double-slit experiment
function simulateDoubleSlitExperiment(numParticles, screenWidth, screenResolution, slitSeparation, wavelength) {
    /*
    Parameters:
    - numParticles: Number of particles to simulate (e.g., 10000)
    - screenWidth: Width of the detection screen (e.g., 2 meters)
    - screenResolution: Number of detection points on the screen (e.g., 1000)
    - slitSeparation: Separation between the two slits (e.g., 0.0001 meters)
    - wavelength: Wavelength of the particles (e.g., 5e-7 meters for visible light)
    */

    // Initialize an array to represent the detection screen
    let screen = new Array(screenResolution).fill(0);

    // Calculate the position of each slit relative to the center
    let slit1Position = -slitSeparation / 2;
    let slit2Position = slitSeparation / 2;

    // Calculate the increment in position per detection point
    let deltaX = screenWidth / screenResolution;

    // Simulate each particle
    for (let i = 0; i < numParticles; i++) {
        // Randomly choose a slit (both slits are open)
        // In quantum mechanics, the particle goes through both slits simultaneously
        // Here, we consider the wave function's interference effect

        // Simulate the interference pattern using the principle of superposition
        // Calculate the intensity at each point on the screen based on the path difference

        // Choose a random position on the screen based on the probability distribution
        let x = Math.random() * screenWidth - screenWidth / 2; // Position on the screen

        // Calculate the path difference from each slit to the point x
        let pathDifference = Math.abs(x - slit1Position) - Math.abs(x - slit2Position);

        // Calculate the interference term
        let phaseDifference = (2 * Math.PI * pathDifference) / wavelength;

        // Calculate the probability (intensity) at this point
        let probability = Math.cos(phaseDifference / 2) ** 2;

        // Determine the index on the screen array
        let index = Math.floor((x + screenWidth / 2) / deltaX);

        // Accumulate the probability at this point
        if (index >= 0 && index < screenResolution) {
            screen[index] += probability;
        }
    }

    // Normalize the screen array for visualization
    let maxIntensity = Math.max(...screen);
    let normalizedScreen = screen.map(intensity => intensity / maxIntensity);

    // Output the result (e.g., log to console or visualize)
    console.log('Screen intensity distribution:');
    for (let i = 0; i < normalizedScreen.length; i++) {
        let position = -screenWidth / 2 + i * deltaX;
        console.log(`Position: ${position.toFixed(4)} m, Intensity: ${normalizedScreen[i].toFixed(4)}`);
    }

    // Return the normalized intensity distribution
    return normalizedScreen;
}

// Example usage of the function
let numParticles = 100000;
let screenWidth = 0.02; // 2 centimeters
let screenResolution = 200;
let slitSeparation = 0.0001; // 0.1 millimeters
let wavelength = 5e-7; // 500 nm (green light)

let intensityDistribution = simulateDoubleSlitExperiment(numParticles, screenWidth, screenResolution, slitSeparation, wavelength);

// The intensityDistribution array contains the normalized intensity at each point on the screen
// This can be used to create a visual representation of the interference pattern
