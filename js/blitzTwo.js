const timerTwo = document.getElementById("playerTwo");
const timeTwoTwo = document.getElementById("blitzTimeTwo");
//named TwoTwo due to conflict with the totaltime.js naming
let minTwo = 4;
let secTwo = 20;
let stoptimeTwo = true;
let holeTwo = 1;

function startTimerTwo() {
  if (stoptimeTwo == true) {
    stoptimeTwo = false;
    stopTimerThree();
    stopTimerFour();
    stopTimerOne();
    timerCycleTwo();
  } else if (stoptimeTwo == false) {
    stopTimerTwo();
  }
}

function stopTimerTwo() {
  if (stoptimeTwo == false) {
    stoptimeTwo = true;
  }
}

function timerCycleTwo() {
  if (stoptimeTwo == false) {
    secTwo = parseInt(secTwo);
    minTwo = parseInt(minTwo);
    if (secTwo > 0) {
      secTwo = secTwo - 1;
    } else if (minTwo > 0) {
      minTwo = minTwo - 1;
      secTwo = secTwo + 59;
    }

    if (secTwo < 10 || secTwo == 0) {
      secTwo = "0" + secTwo;
    }

    if (minTwo === 0 && secTwo == 0) {
      timeTwoTwo.innerText = "TIME";
      currentHoleTwo.innerText = holeBlitz.toString();
    }

    timeTwoTwo.innerText = minTwo + ":" + secTwo;

    setTimeout("timerCycleTwo()", 1000);
  }
}
