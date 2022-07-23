const timer = document.getElementById('stopwatch');
const theButton = document.getElementById('theButton');
let totalDisplay = document.getElementById('totaltime');
const time = document.getElementById('time');
const announce = document.getElementById('announce');
const speedRunDisplay = document.getElementById('speedRunDisplay');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
var hole = 0;
theButton.innerText = "Start";
total = 0;
speedRunDisplay.hidden = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
        theButton.innerText = "Lap";
        hole++;

    } else if (stoptime == false & hole <= 19) {
      
      time.innerText += hole + ' ' + timer.innerText + '/ /';
      

      resetTimer();  
      

      if (hole <= 18) {
        hole++;
      }

      if (hole === 19) {
        theButton.innerHTML = "TIME!";
        stoptime = true;
        theButton.style.display = 'none';
        announce.innerText = "TIME!";
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
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    timer.innerHTML = min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  } 
}

function resetTimer() {

    timer.innerHTML = '00:00';
    sec = 0;
    min = 0;
}