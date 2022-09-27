const countdownEl = document.getElementsByClassName('countdown')[0];
const startBtn = document.getElementsByClassName('timerStart')[0];

let startingMinutes = 25;
let time = startingMinutes * 60;

function updateCountdown() {
  if (time >= 1) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
  } else {
    countdownEl.innerHTML = "DONE!";
  }
}

setInterval(updateCountdown, 1000);

startBtn.addEventListener("click", () => {
  window.location.reload();
});