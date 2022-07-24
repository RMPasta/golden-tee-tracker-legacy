const timer = document.getElementById('stopwatch');
const theButton = document.getElementById('theButton');
let totalTimeDisplay = document.getElementById('totalTime');
const time = document.getElementById('time');
const announce = document.getElementById('announce');
const speedRunDisplay = document.getElementById('speedRunDisplay');
let total = [0, 0];

var min = 0;
var sec = 0;
var stoptime = true;
var hole = 0;
theButton.innerText = "Start";
speedRunDisplay.hidden = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
        theButton.innerText = "Lap";
        hole++;

    } else if (stoptime == false & hole <= 19) {
      
      time.innerText += ' / ' + hole + '-' + timer.innerText + ' / ';
      //trying to add to a total time, not working yet
      total[0] + min;
      total[1] + sec;
      console.log(total);
      //trying to add to a total time, not working yet

      resetTimer();  
      

      if (hole <= 18) {
        hole++;
      }

      if (hole === 19) {
        theButton.innerHTML = "TIME!";
        stoptime = true;
        theButton.style.display = 'none';
        timer.style.display = 'none';
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


    timer.innerHTML = min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  } 
}

function resetTimer() {

    timer.innerHTML = '0:00';
    sec = 0;
    min = 0;
}