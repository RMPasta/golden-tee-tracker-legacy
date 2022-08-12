const timerOne = document.getElementById("playerOne");
const timeOne = document.getElementById("blitzTimeOne");

let minOne = 4;
let secOne = 20;
let stoptimeOne = true;
let holeBlitz = 1;

function holeMade() {
  stopTimerOne();
  stopTimerTwo();
  stopTimerThree();
  stopTimerFour();
  holeBlitz++;
  if (minOne > 0 || secOne > 0) {
    currentHoleOne.innerText = parseInt(holeBlitz);
  }
  if (minTwo > 0 || secTwo > 0) {
    currentHoleTwo.innerText = parseInt(holeBlitz);
  }
  if (minThree > 0 || secThree > 0) {
    currentHoleThree.innerText = parseInt(holeBlitz);
  }
  if (minFour > 0 || secFour > 0) {
    currentHoleFour.innerText = parseInt(holeBlitz);
  }
}

function startTimerOne() {
  if (stoptimeOne == true) {
    stoptimeOne = false;
    stopTimerTwo();
    stopTimerFour();
    stopTimerThree();
    timerCycleOne();
  } else if (stoptimeOne == false) {
    stopTimerOne();
  }
}

function stopTimerOne() {
  if (stoptimeOne == false) {
    stoptimeOne = true;
  }
}

function timerCycleOne() {
  if (stoptimeOne == false) {
    secOne = parseInt(secOne);
    minOne = parseInt(minOne);
    if (secOne > 0) {
      secOne = secOne - 1;
    } else if (minOne > 0) {
      minOne = minOne - 1;
      secOne = secOne + 59;
    }

    if (secOne < 10 || secOne == 0) {
      secOne = "0" + secOne;
    }

    if (minOne === 0 && secOne === 0) {
      timeOne.innerText = "TIME";
      currentHoleOne.innerText = holeBlitz.toString();
    }

    timeOne.innerText = minOne + ":" + secOne;

    setTimeout("timerCycleOne()", 1000);
  }
}
