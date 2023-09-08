window.onload = function() {
    alert("Congratulations! You won $6.0 million dollars!");
};

const video = document.getElementById('backgroundVideoo');

document.getElementById('square1').addEventListener('mouseover', function() {
    video.style.opacity = '1';
    video.play();
});

document.getElementById('square1').addEventListener('mouseout', function() {
    video.style.opacity = '0';
    video.pause();
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











