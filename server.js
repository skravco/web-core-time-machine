// Helper function to format time
function formatTime(unit) {
  let h = Math.floor(unit / 3600);
  let m = Math.floor((unit - h * 3600) / 60);
  let s = unit % 60;

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  return `${h}:${m}:${s}`;
}

// Timer function factory
function createTimer() {
  let unit = 0;
  let interval = null;

  function timer() {
    unit++;
    timeElement.innerText = formatTime(unit);
  }

  function start() {
    if (interval) {
      return;
    }
    interval = setInterval(timer, 1000);
  }

  function stop() {
    clearInterval(interval);
    interval = null;
  }

  function reset() {
    stop();
    unit = 0;
    timeElement.innerText = formatTime(unit);
  }

  return { start, stop, reset };
}

// DOM elements
const timeElement = document.querySelector(".watch .time");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

// Timer instance
const timerInstance = createTimer();

// Event listeners
start_btn.addEventListener("click", timerInstance.start);
stop_btn.addEventListener("click", timerInstance.stop);
reset_btn.addEventListener("click", timerInstance.reset);
