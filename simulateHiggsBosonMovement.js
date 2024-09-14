// Function to simulate the movement of the Higgs boson in a field
function simulateHiggsBosonMovement() {
    // Define the initial position of the Higgs boson
    let higgsBoson = {
        x: 0,
        y: 0,
        z: 0
    };

    // Function to update the position based on random motion
    function updatePosition() {
        // The Higgs boson moves randomly in three-dimensional space
        higgsBoson.x += (Math.random() - 0.5) * 2;
        higgsBoson.y += (Math.random() - 0.5) * 2;
        higgsBoson.z += (Math.random() - 0.5) * 2;

        // Log the new position
        console.log(`Higgs Boson Position -> x: ${higgsBoson.x.toFixed(2)}, 
          y: ${higgsBoson.y.toFixed(2)}, z: ${higgsBoson.z.toFixed(2)}`);
    }

    // Return the Higgs boson object and the update function
    return {
        higgsBoson: higgsBoson,
        updatePosition: updatePosition
    };
}

// Create the Higgs boson simulation
let higgsSimulation = simulateHiggsBosonMovement();

// Simulate the movement over 10 iterations
for (let i = 0; i < 10; i++) {
    higgsSimulation.updatePosition();
}
