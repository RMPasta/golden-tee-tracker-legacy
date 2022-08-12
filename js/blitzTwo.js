const timerTwo = document.getElementById("playerTwo");

let minTwo = 4;
let secTwo = 20;
let stoptimeTwo = true;
let holeTwo = 0;

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
    } else {
      minTwo = minTwo - 1;
      secTwo = secTwo + 59;
    }

    if (secTwo < 10 || secTwo == 0) {
      secTwo = "0" + secTwo;
    }

    if (minTwo === 0 && secTwo == 0) {
      timerTwo.innerText = "TIME";
    }

    timerTwo.innerText = minTwo + ":" + secTwo;

    setTimeout("timerCycleTwo()", 1000);
  }
}
