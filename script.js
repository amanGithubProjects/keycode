// Function to generate and display a random key code
function generateKeyCode() {
    const keyCode = Math.floor(Math.random() * 256); // Generates a random number between 0 and 255
    document.getElementById("keyCodeDisplay").textContent = `Key Code: ${keyCode}`;
}

// Event listener for the "Generate Key Code" button
document.getElementById("generateBtn").addEventListener("click", generateKeyCode);

// Event listener for capturing key presses and displaying their key codes
document.addEventListener("keydown", function(event) {
    document.getElementById("keyCodeDisplay").textContent = `Key Code: ${event.keyCode}`;
});
