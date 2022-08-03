
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

if (hole == 19) {
  stopTimerTotal();
}    
    
if (hole == 19 & parseInt(minTotal) < 9 & parseInt(secTotal) < 30) {
  nameDis.innerText = 'WTF WTF WTF ' + name.value.toUpperCase() + ', LEGENDARY PERFORMANCE!';

} else if (hole == 19 & parseInt(minTotal) < 10 & parseInt(secTotal) < 15) {
  nameDis.innerText = 'Woah! ' + name.value.toUpperCase() + ', that\'s a CROP. Oh yeah, looks at blue shirt, he\'s like, "OH YEAH, THAT\'S A RESULT"';

} else if (hole == 19 & parseInt(minTotal) < 10 & parseInt(secTotal) < 30) {
  nameDis.innerText = 'Woah! ' + name.value.toUpperCase() + ', you never cease to amaze.';
  
 } else if (hole == 19 & parseInt(minTotal) < 10) {
  nameDis.innerText = 'Ayyy ggs ' + name.value.toUpperCase() + '! nice goin\'.';

} else if (hole == 19 & parseInt(minTotal) < 11 & parseInt(secTotal) < 30) {
  nameDis.innerText = 'Damn, ' + name.value.toUpperCase() + '... Better luck next time.';

}  else if (hole == 19 & parseInt(minTotal) < 11) {
  nameDis.innerText = 'Bruh... ' + name.value.toUpperCase() + ', it might be time to hang up the clubs.';

} else if (hole == 19 & parseInt(minTotal) < 12 & parseInt(secTotal) < 30) {
  nameDis.innerText = 'RIP ' + name.value.toUpperCase() + '. Though you\'ve been rekt, you can maybe come back from this maybe.';

} else if (hole == 19 & parseInt(minTotal) < 12) {
  nameDis.innerText = 'I didn\'t get this result... I DIDN\'T FUCKING DO THIS... I\'ll kill you.';

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
