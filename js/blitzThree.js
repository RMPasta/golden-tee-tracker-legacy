const timerThree = document.getElementById("playerThree");
const timeThree = document.getElementById("blitzTimeThree");

let minThree = 4;
let secThree = 20;
let stoptimeThree = true;
let holeThree = 1;

function startTimerThree() {
  if (stoptimeThree == true) {
    stoptimeThree = false;
    stopTimerTwo();
    stopTimerFour();
    stopTimerOne();
    timerCycleThree();
  } else if (stoptimeThree == false) {
    stopTimerThree();
  }
}

function stopTimerThree() {
  if (stoptimeThree == false) {
    stoptimeThree = true;
  }
}

function timerCycleThree() {
  if (stoptimeThree == false) {
    secThree = parseInt(secThree);
    minThree = parseInt(minThree);
    if (secThree > 0) {
      secThree = secThree - 1;
    } else if (minThree > 0) {
      minThree = minThree - 1;
      secThree = secThree + 59;
    }

    if (secThree < 10 || secThree == 0) {
      secThree = "0" + secThree;
    }

    if (minThree === 0 && secThree == 0) {
      timeThree.innerText = "TIME";
      currentHoleThree.innerText = holeBlitz.toString();
    }

    timeThree.innerText = minThree + ":" + secThree;

    setTimeout("timerCycleThree()", 1000);
  }
}
