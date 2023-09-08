window.onload = function() {
    alert("Congratulations! You won $6.0 million dollars!");
};

const video = document.getElementById('backgroundVideoo');

['square1', 'square2', 'square3'].forEach((squareId, index) => {
    const square = document.getElementById(squareId);
    const audio = document.getElementById(`audio${index + 1}`);
    
    // Ensure volume is set to maximum for debugging
    audio.volume = 0.3;

    // For the video
    square.addEventListener('mouseover', function() {
        video.style.opacity = '1';
        video.play();

        // For the audio
        let playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Automatic playback started!
            }).catch(error => {
                // Auto-play was prevented. This can help you see if there's an issue with auto-play policies.
                console.error("Playback failed: ", error);
            });
        }
    });
    
    square.addEventListener('mouseout', function() {
        video.style.opacity = '0';
        video.pause();
        
        // For the audio
        audio.pause();
        audio.currentTime = 0;
    });
});




// Fade out the summary content and make the squares and header visible upon button click
document.getElementById('glow-on-hover').addEventListener('click', function() {
    // Fade out the summary content
    document.querySelector('.summary-content').classList.add('fade-out');
    
    // Make the squares visible
    document.querySelectorAll('.hover-square').forEach(square => {
        square.style.opacity = '1';
    });
    
    // Make the header visible
    document.querySelector('.header-section h1').style.opacity = '1';
});

// Fetch all squares from the DOM
const squares = document.querySelectorAll('.hover-square');
console.log(`Found ${squares.length} squares.`); // Log the number of squares found

squares.forEach(square => {
    // Mouseover event to scale up
    square.addEventListener('mouseover', function() {
        console.log('Mouseover event triggered.');
        square.style.transform = 'translate(-50%, -50%) scale(1.1)';
    });
 
    // Mouseout event to revert to original scale
    square.addEventListener('mouseout', function() {
        console.log('Mouseout event triggered.');
        square.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});











