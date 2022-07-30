
const timerTotal = document.getElementById("stopwatchTotal");


let minTotal = 0;
let secTotal = 0;
let stoptimeTotal = true;

function startTimerTotal() {
  if (stoptimeTotal == true) {
    stoptimeTotal = false;
    timerCycleTotal();
  }
}

function stopTimerTotal() {
  if (stoptimeTotal == false) {
    stoptimeTotal = true;
  }
}

function timerCycleTotal() {

    
    if (hole == 19 & min > 1) {
        stopTimerTotal();
        nameDis.innerText = 'Damn, ' + name.value.toUpperCase(); + '... Better luck next time.'
        
    }

  if (stoptimeTotal == false) {
    secTotal = parseInt(secTotal);
    minTotal = parseInt(minTotal);

    secTotal = secTotal + 1;

    if (secTotal == 60) {
      minTotal = minTotal + 1;
      secTotal = 0;
    }

    if (secTotal < 10 || secTotal == 0) {
      secTotal = "0" + secTotal;
    }

    timerTotal.innerHTML = minTotal + ":" + secTotal;

    setTimeout("timerCycleTotal()", 1000);
  }
  
 

}
