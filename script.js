const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const audioPlayer = document.getElementById("audioPlayer");

// Hide pause icon initially
pauseBtn.style.display = "none";

playBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
  } else {
    audioPlayer.pause();
    playBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
  }
});

pauseBtn.addEventListener("click", () => {
  audioPlayer.pause();
  pauseBtn.style.display = "none";
  playBtn.style.display = "inline-block";
});
