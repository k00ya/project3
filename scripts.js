let isButtonClicked = false;

window.onload = function () {
  alert("Congratulations! You won $6.0 million dollars!");
};

const videos = {
  square1: document.getElementById("backgroundVideoo"),
  square2: document.getElementById("backgroundVideo2"),
  square3: document.getElementById("backgroundVideo3"),
};

function playMedia(video, audio) {
  video.style.opacity = "1";
  video.play();

  let playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then((_) => {})
      .catch((error) => {
        console.error("Playback failed: ", error);
      });
  }
}

function pauseMedia(video, audio) {
  video.style.opacity = "0";
  video.pause();

  audio.pause();
  audio.currentTime = 0;
}

["square1", "square2", "square3"].forEach((squareId, index) => {
  const square = document.getElementById(squareId);
  const audio = document.getElementById(`audio${index + 1}`);
  const video = videos[squareId];

  square.addEventListener("mouseover", function () {
    if (isButtonClicked) {
      playMedia(video, audio);
      console.log("Mouseover event triggered.");
      square.style.transform = "translate(-50%, -50%) scale(1.1)";
    }
  });

  square.addEventListener("mouseout", function () {
    if (isButtonClicked) {
      pauseMedia(video, audio);
      console.log("Mouseout event triggered.");
      square.style.transform = "translate(-50%, -50%) scale(1)";
    }
  });
});

document.getElementById("glow-on-hover").addEventListener("click", function () {
  document.querySelector(".summary-content").classList.add("fade-out");

  document.querySelectorAll(".hover-square").forEach((square) => {
    square.style.opacity = "1";
  });

  document.querySelector(".header-section h1").style.opacity = "1";

  isButtonClicked = true;
});
