// Predefined mappings: word to code
const wordToCode = {
    "Motives": "3017",
    "Demon": "6230",
    "Gunslinger": "6033",
    "False Queen": "2017"
};

// Predefined mappings: code to image
const codeToImage = {
    "3017": "image1.png",    // Replace with actual image URLs
    "6230": "image2.png",
    "6033": "image3.png",
    "2017": "image4.png"
};

// Handle input submission
document.getElementById('submit-input').addEventListener('click', function() {
    const input = document.getElementById('unified-input').value.trim();
    const resultOutput = document.getElementById('result-output');
    const dynamicImage = document.getElementById('dynamic-image');
    const closeButton = document.getElementById('close-image');

    // Check if input matches a word
    if (wordToCode[input]) {
        resultOutput.textContent = wordToCode[input];
        resultOutput.style.color = "#00ff00"; // Display code in green
    }
    // Check if input matches a code
    else if (codeToImage[input]) {
        dynamicImage.src = codeToImage[input];
        dynamicImage.alt = "ARG Image";
        closeButton.style.display = 'block'; // Show the close button
        resultOutput.textContent = ""; // Clear any text output when image is shown
    } else {
        resultOutput.textContent = "Invalid input! Try again.";
        resultOutput.style.color = "red"; // Error in red
    }
});

// Handle image close button
document.getElementById('close-image').addEventListener('click', function() {
    const dynamicImage = document.getElementById('dynamic-image');
    dynamicImage.src = "placeholder.png";
    dynamicImage.alt = "Teaser Image";
    this.style.display = 'none'; // Hide the close button
});

// Audio handling
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-audio');

    function playAudio() {
        audio.play().catch(() => {
            document.body.addEventListener('click', function triggerAudio() {
                audio.play();
                document.body.removeEventListener('click', triggerAudio);
            });
        });
    }

    playAudio();
});