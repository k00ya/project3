let isButtonClicked = false;  // Initialize a flag variable

window.onload = function() {
    alert("Congratulations! You won $6.0 million dollars!");
};

const video = document.getElementById('backgroundVideoo');

const videos = {
    square1: document.getElementById('backgroundVideoo'),
    square2: document.getElementById('backgroundVideo2'),
    square3: document.getElementById('backgroundVideo3')
};

['square1', 'square2', 'square3'].forEach((squareId, index) => {
    const square = document.getElementById(squareId);
    const audio = document.getElementById(`audio${index + 1}`);
    const video = videos[squareId];

    square.addEventListener('mouseover', function() {
        if (isButtonClicked) {  // Check if the button has been clicked
            Object.values(videos).forEach(v => {
                v.style.opacity = '0';
                v.pause();
            });
            video.style.opacity = '1';
            video.play();
            
            let playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                }).catch(error => {
                    console.error("Playback failed: ", error);
                });
            }
        }
    });

    square.addEventListener('mouseout', function() {
        if (isButtonClicked) {  // Check if the button has been clicked
            video.style.opacity = '0';
            video.pause();

            audio.pause();
            audio.currentTime = 0;
        }
    });
});

document.getElementById('glow-on-hover').addEventListener('click', function() {
    document.querySelector('.summary-content').classList.add('fade-out');
    
    document.querySelectorAll('.hover-square').forEach(square => {
        square.style.opacity = '1';
    });
    
    document.querySelector('.header-section h1').style.opacity = '1';
    
    isButtonClicked = true;  // Set the flag to true
});

const squares = document.querySelectorAll('.hover-square');
console.log(`Found ${squares.length} squares.`);

squares.forEach(square => {
    square.addEventListener('mouseover', function() {
        if (isButtonClicked) {  // Check if the button has been clicked
            console.log('Mouseover event triggered.');
            square.style.transform = 'translate(-50%, -50%) scale(1.1)';
        }
    });

    square.addEventListener('mouseout', function() {
        if (isButtonClicked) {  // Check if the button has been clicked
            console.log('Mouseout event triggered.');
            square.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    });
});












