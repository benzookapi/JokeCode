// Function to simulate quantum entanglement between two qubits
function entangleQubits() {
    // Define two qubits with undefined initial states
    let qubit1 = { state: undefined };
    let qubit2 = { state: undefined };

    // Function to measure the entangled qubits
    function measureQubits() {
        // Randomly decide the outcome (0 or 1)
        let outcome = Math.random() < 0.5 ? 0 : 1;

        // Assign the outcome to both qubits simultaneously
        qubit1.state = outcome;
        qubit2.state = outcome;

        // Log the measurement results
        console.log(`Qubit 1 measured: ${qubit1.state}`);
        console.log(`Qubit 2 measured: ${qubit2.state}`);
    }

    // Return the qubits and the measurement function
    return {
        qubit1: qubit1,
        qubit2: qubit2,
        measure: measureQubits
    };
}

// Create entangled qubits
let entangledSystem = entangleQubits();

// Measure the qubits
entangledSystem.measure();
