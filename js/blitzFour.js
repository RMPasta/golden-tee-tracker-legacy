const timerFour = document.getElementById("playerFour");

let minFour = 4;
let secFour = 20;
let stoptimeFour = true;
let holeFour = 0;

function startTimerFour() {
  if (stoptimeFour == true) {
    stoptimeFour = false;
    stopTimerTwo();
    stopTimerThree();
    stopTimerOne();
    timerCycleFour();
  } else if (stoptimeFour == false) {
    stopTimerFour();
  }
}

function stopTimerFour() {
  if (stoptimeFour == false) {
    stoptimeFour = true;
  }
}

function timerCycleFour() {
  if (stoptimeFour == false) {
    secFour = parseInt(secFour);
    minFour = parseInt(minFour);
    if (secFour > 0) {
      secFour = secFour - 1;
    } else {
      minFour = minFour - 1;
      secFour = secFour + 59;
    }

    if (secFour < 10 || secFour == 0) {
      secFour = "0" + secFour;
    }

    if (minFour === 0 && secFour == 0) {
      timerFour.innerText = "TIME";
    }

    timerFour.innerText = minFour + ":" + secFour;

    setTimeout("timerCycleFour()", 1000);
  }
}
