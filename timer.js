const timer = document.getElementById("stopwatch");
const theButton = document.getElementById("theButton");
const time = document.getElementById("time");
const announce = document.getElementById("announce");
const totalTimeDisplay = document.getElementById("totalTime");
const speedRunDisplay = document.getElementById("speedRunDisplay");
const cooldown = document.getElementById("cooldown");

let min = 0;
let sec = 0;
let stoptime = true;
let hole = 0;
let totalSec = 0;
let totalMin = 0;
theButton.innerText = "Start";

function removeCooldown() {
  cooldown.innerText = '';
}

function startTimer() {

  if (stoptime == true) {
    startTimerTotal()
  }

  if (stoptime == true) {
    stoptime = false;
    timerCycle();
    theButton.innerText = "Lap";
    hole++;
  } else if (sec < 5 & min < 1) {
    setTimeout('removeCooldown()', 5000 - sec * 1000)
    cooldown.innerText = '5 second cooldown';
  } else if ((stoptime == false) & (hole <= 19 & sec > 4 || min > 0)) {
    cooldown.innerText = '';



    postResults();

    time.innerText += hole++ + " - " + timer.innerText + ' - ';
    
    
    const para = document.createElement("p");
    time.appendChild(para);

    resetTimer();



    if (hole === 19) {
      results.finalScore = timerTotal.innerText;
      theButton.style.display = "none";
      stoptime = true;
      timer.style.display = "none";
      announce.innerText = "TIME!";
      downloadCSV.style.display = "flex";
    }
  }
}

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {


  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }

    timer.innerText = min + ":" + sec;
 
    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
  //post total time and then resut timer

  timer.innerHTML = "0:00";
  sec = 0;
  min = 0;
}
//post time rresult per hole to results object in menu.js
function postResults() {
  if (hole === 1) {
    results.hole1 = timer.innerText;
  } else if (hole === 2) {
    results.hole2 = timer.innerText;
  } else if (hole === 3) {
    results.hole3 = timer.innerText;
  } else if (hole === 4) {
    results.hole4 = timer.innerText;
  } else if (hole === 5) {
    results.hole5 = timer.innerText;
  } else if (hole === 6) {
    results.hole6 = timer.innerText;
  } else if (hole === 7) {
    results.hole7 = timer.innerText;
  } else if (hole === 8) {
    results.hole8 = timer.innerText;
  } else if (hole === 9) {
    results.hole9 = timer.innerText;
  } else if (hole === 10) {
    results.hole10 = timer.innerText;
  } else if (hole === 11) {
    results.hole11 = timer.innerText;
  } else if (hole === 12) {
    results.hole12 = timer.innerText;
  } else if (hole === 13) {
    results.hole13 = timer.innerText;
  } else if (hole === 14) {
    results.hole14 = timer.innerText;
  } else if (hole === 15) {
    results.hole15 = timer.innerText;
  } else if (hole === 16) {
    results.hole16 = timer.innerText;
  } else if (hole === 17) {
    results.hole17 = timer.innerText;
  } else if (hole === 18) {
    results.hole18 = timer.innerText;
  }
}
